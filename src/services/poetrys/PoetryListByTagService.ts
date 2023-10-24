import database from "../../prisma";

interface PoetryListByTagRequest {
    tagName: string;
}
class PoetryListByTagService {

    async execute({ tagName }: PoetryListByTagRequest) {

        const poetrys = await database.poetry.findMany({
            where: {
                tags: { has: tagName }
            },
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


export { PoetryListByTagService };
