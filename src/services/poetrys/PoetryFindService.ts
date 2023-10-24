import database from "../../prisma";

interface PoetryFindRequest {
    id: string;
}

class PoetryFindService {

    async execute({ id }: PoetryFindRequest) {

        const poetry = await database.poetry.findUnique({
            where: { id: id },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        biography: true,
                        profilePhoto: true,
                        createdAt: true
                    }
                },
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
