import { Request, Response } from "express";
import { GetPoetryByDateService } from "../../services/poetrys/GetPoetryByDateService";

class GetPoetryByDateController {
    async handle(req: Request, res: Response) {
        const { startDate, endDate } = req.body;

        const service = new GetPoetryByDateService();

        const result = await service.execute({ startDate, endDate });

        return res.json(result);
    }
}

export { GetPoetryByDateController };