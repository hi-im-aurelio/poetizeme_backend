import { Response, Request } from "express";
import { PoetryListService } from "../../services/poetrys/PoetryListService";

class ListPoetryController {

    async handle(_: Request, res: Response) {

        const service = new PoetryListService();

        const poetrys = await service.execute();

        return res.json(poetrys);
    }
}

export { ListPoetryController };
