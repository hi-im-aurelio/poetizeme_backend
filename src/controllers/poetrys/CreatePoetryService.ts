import { Response, Request } from "express";
import { CreatePoetryService } from "../../services/poetrys/CreatePoetryService";

class CreatePoetryController {
    async handle(req: Request, res: Response) {

        const { title, content, tags, authorId } = req.body;

        const service = new CreatePoetryService();

        const poetry = await service.execute({ title, content, tags, authorId });
        return res.json(poetry);
    }
}