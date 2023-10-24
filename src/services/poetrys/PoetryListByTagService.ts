import database from "../../prisma";

interface PoetryListByTagRequest {
    tag: string;
}
class PoetryListByTagService {

    async execute({ tag }: PoetryListByTagRequest) {

        const poetrys = await database.poetry.findMany({
            where: {
                tags: { has: tag }
            },
            include: {
                author: true,
                likes: true
            }
        });

        return poetrys;
    }
}


export { PoetryListByTagService };
