import { compare } from "bcryptjs";
import database from "../../prisma";
import { sign } from "jsonwebtoken";

interface _LoginAuthorRequest {
    username: string;
    password: string;
}


class LoginAuthorService {
    async execute({ username, password }: _LoginAuthorRequest) {

        const _author = await database.author.findFirst({
            where: { username: username }
        });

        if (!_author) {
            throw new Error("Usuário/Senha incorreto.");
        }

        const _passwordMath = await compare(password, _author.password);

        if (!_passwordMath) {
            throw new Error("Usuário/Senha incorreto.");
        }


        const _token = sign({ id: _author.id, username: _author.username }, process.env.JWT_SECRET, { subject: _author.id, expiresIn: '30d' });

        return {
            id: _author.id,
            username: _author.username,
            email: _author.email,
            biography: _author.biography,
            profilePhoto: _author.profilePhoto,
            createdAt: _author.createdAt,
            token: _token,
        };
    }
}


export { LoginAuthorService };
