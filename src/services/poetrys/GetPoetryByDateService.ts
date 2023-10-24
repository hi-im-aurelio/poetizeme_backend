import database from "../../prisma";

interface GetPoetryByDateRequest {
    startDate: string;
    endDate: string;
}

class GetPoetryByDateService {
    async execute({ startDate, endDate }: GetPoetryByDateRequest) {

        const poetrys = await database.poetry.findMany({
            where: {
                createdAt: { gte: new Date(startDate), lte: new Date(endDate) }
            }
        });

        return poetrys;
    }
}

export { GetPoetryByDateService };