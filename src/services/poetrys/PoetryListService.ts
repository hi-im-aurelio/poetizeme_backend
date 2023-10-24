import database from "../../prisma";

class PoetryListService {

    async execute() {

        const poetrys = await database.poetry.findMany({
            include: {
                author: true,
                likes: true
            }
        });

        return poetrys;
    }
}

export { PoetryListService };
