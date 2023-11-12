import { Response, Request } from "express";
import { AddLikeService, RemoveLikeService } from "../../services/poetrys/LikeService";

class AddLikeController {
    async handle(req: Request, res: Response) {

        const { poetryId } = req.body;
        const authorId: string = req.userId;

        const service = new AddLikeService();

        const like = await service.execute({ poetryId, authorId });
        return res.json(like);
    }
}

class RemoveLikeController {
    async handle(req: Request, res: Response) {

        const { poetryId } = req.body;
        const authorId: string = req.userId;

        const service = new RemoveLikeService();

        const removeLike = await service.execute({ poetryId, authorId });

        return res.json(removeLike);
    }
}

export { AddLikeController, RemoveLikeController };