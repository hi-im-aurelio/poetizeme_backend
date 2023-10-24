import database from "../../prisma";

interface LikeData {
    poetryId: string;
    authorId: string;
}

class AddLikeService {
    async execute({ poetryId, authorId }: LikeData) {

        const poetry = await database.poetry.findUnique({ where: { id: poetryId } });

        if (!poetry) {
            throw new Error("Poema não encontrado.");
        }

        const existingLike = await database.like.findUnique({
            where: {
                poetryId_authorId: {
                    poetryId: poetryId,
                    authorId: authorId
                }
            }
        });

        if (existingLike) {
            throw new Error("Você já deu 'like' neste poema.");
        }

        await database.like.create({
            data: {
                poetryId: poetryId,
                authorId: authorId
            }
        });

        return { message: "Like adicionado com sucesso!" };
    }
}

class RemoveLikeService {
    async execute({ poetryId, authorId }: LikeData) {

        const poetry = await database.poetry.findUnique({ where: { id: poetryId } });

        if (!poetry) {
            throw new Error("Poema não encontrado.");
        }

        const existingLike = await database.like.findUnique({
            where: {
                poetryId_authorId: {
                    poetryId: poetryId,
                    authorId: authorId
                }
            }
        });

        if (!existingLike) {
            throw new Error("Você não deu 'like' neste poema ainda.");
        }

        await database.like.delete({
            where: {
                poetryId_authorId: {
                    poetryId: poetryId,
                    authorId: authorId
                }
            }
        });

        return { message: "Like removido com sucesso!" };
    }
}

export { AddLikeService, RemoveLikeService };
