import database from "../../prisma";
import { hash } from "bcryptjs";

interface _CreateAuthorRequest {
    username: string;
    password: string;
}

class CreateAuhorService {
    async execute({ username, password }: _CreateAuthorRequest) {

        if (!username) {
            throw new Error('Forneça um usuário.');
        }

        if (!password) {
            throw new Error('Forneça uma senha para o usuário.');
        }

        const usernameAlreadyExists = await database.author.findFirst({
            where: { username: username }
        });

        if (usernameAlreadyExists) {
            throw new Error('Nome de usuário indisponivel! Tente outro.');
        }


        const _passwordHash = await hash(password, 8);

        const _author = await database.author.create({
            data: {
                username: username,
                password: _passwordHash,
            }, select: {
                id: true,
                username: true,
                email: true,
                biography: true,
                profilePhoto: true,
                createdAt: true,
            }
        });

        return _author;

    }
}

export { CreateAuhorService };