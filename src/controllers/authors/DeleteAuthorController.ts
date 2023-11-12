import { Response, Request } from "express";
import DeleteAuthorService from "../../services/authors/DeleteAuthorService";

export default class DeleteAuthorController {
    async handle(request: Request, response: Response) {
        const _service = new DeleteAuthorService();

        const { id } = request.params;

        const action = await _service.execute(id);

        return response.json(action);
    }
}