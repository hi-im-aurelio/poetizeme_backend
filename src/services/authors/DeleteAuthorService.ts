import database from "../../prisma";

export default class DeleteAuthorService {
    async execute(id: string) {

        const author = await database.author.findUnique({ where: { id } });

        if (!author) {
            throw new Error("Autor não encontrado. ID inválido ou autor já excluído.");
        }

        await database.author.delete({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
            },
        });

        return { success: true, deleted_author: author };
    }
}
