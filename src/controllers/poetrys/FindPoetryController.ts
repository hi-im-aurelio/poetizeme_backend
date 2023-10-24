import { Response, Request } from "express";
import { PoetryFindService } from "../../services/poetrys/PoetryFindService";

class FindPoetryController {

    async handle(req: Request, res: Response) {

        const { id } = req.params;

        const service = new PoetryFindService();

        const poetry = await service.execute({ id });
        return res.json(poetry);
    }
}

export { FindPoetryController };
