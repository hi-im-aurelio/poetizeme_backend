import { Response, Request } from "express";
import { PoetryListByTagService } from "../../services/poetrys/PoetryListByTagService";

class ListPoetryByTagController {

    async handle(req: Request, res: Response) {

        const { tag } = req.params;

        const service = new PoetryListByTagService();

        const poetrys = await service.execute({ tag });
        return res.json(poetrys);
    }
}

export { ListPoetryByTagController };