import database from "../../prisma";
import { hash } from "bcryptjs";

interface CreateAuthorRequest {
    username: string;
    password: string;
}

export default class CreateAuthorService {
    async checkUsernameAvailability(username: string): Promise<boolean> {
        const existingUser = await database.author.findUnique({
            where: { username }
        });

        return !existingUser;
    }

    async suggestUniqueUsername(username: string): Promise<string> {
        if (await this.checkUsernameAvailability(username)) {
            return username;
        }

        const tmpname = await this.generateUniqueUsername(username);
        throw new Error(`Nome de usuário indisponivel. Nome de usuário sugerido: ${tmpname} está disponível.`);
    }

    private async generateUniqueUsername(baseUsername: string, attempts: number = 0): Promise<string> {
        if (attempts > 5) {
            throw new Error('Não foi possível gerar um nickname único após várias tentativas.');
        }

        const randomNumber = Math.floor(Math.random() * 100);
        const suggestedUsername = `${baseUsername}${randomNumber}`;

        if (await this.checkUsernameAvailability(suggestedUsername)) {
            return suggestedUsername;
        }

        return this.generateUniqueUsername(baseUsername, attempts + 1);
    }

    async execute({ username, password }: CreateAuthorRequest) {

        const formattedName = username
            .replace(/[^\w\s]/gi, '') // Remove caracteres especiais
            .toLowerCase()
            .replace(/\s+/g, ''); // Remove espaços e outros caracteres não alfanuméricos


        if (!formattedName) {
            throw new Error('Forneça um nome de usuário válido.');
        }

        if (!password) {
            throw new Error('Forneça uma senha para o usuário.');
        }

        const suggestedUsername = await this.suggestUniqueUsername(formattedName);

        const passwordHash = await hash(password, 8);

        const createdAuthor = await database.author.create({
            data: {
                username: suggestedUsername,
                password: passwordHash,
            },
            select: {
                id: true,
                username: true,
                email: true,
                biography: true,
                profilePhoto: true,
                createdAt: true,
            }
        });

        return {
            id: createdAuthor.id,
            username: createdAuthor.username,
            message: `Autor criado com sucesso. Nome de usuário: ${createdAuthor.username}.`
        };

    }
}
