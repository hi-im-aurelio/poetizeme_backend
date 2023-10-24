import database from "../../prisma";

class PoetryListService {

    async execute() {

        const poetrys = await database.poetry.findMany({
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

        return poetrys;
    }
}

export { PoetryListService };
