import database from "../../prisma";

interface PoetryFindRequest {
    id: string;
}

class PoetryFindService {

    async execute({ id }: PoetryFindRequest) {

        const poetry = await database.poetry.findUnique({
            where: { id: id },
            include: {
                author: true,
                likes: true
            }
        });

        if (!poetry) {
            throw new Error("Poema não encontrado");
        }

        return poetry;
    }
}

export { PoetryFindService };
