import database from "../../prisma";

export default class DeleteAuthorService {
    async execute(id: string) {

        const author = await database.author.findFirst({ where: { id: id } });

        if (!author) throw new Error("Id invalido.");

        await database.author.delete({
            where: { id: id },
            select: {
                id: true,
                username: true,
                email: true,
            },
        });

        return { action: true };
    }
}