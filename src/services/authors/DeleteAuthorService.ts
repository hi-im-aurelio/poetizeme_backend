import database from "../../prisma";

export default class DeleteAuthorService {
    async execute(id: string) {

        const author = await database.author.findUnique({ where: { id } });

        if (!author) {
            throw new Error("Autor não encontrado. ID inválido ou autor já excluído.");
        }

        // Para caso o author tenha publicado algum poema, todos eles serão apagados.
        await database.poetry.deleteMany({ where: { author: author } });

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
