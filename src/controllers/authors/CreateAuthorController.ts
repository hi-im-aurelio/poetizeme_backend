import { Response, Request } from "express";
import CreateAuthorService from "../../services/authors/CreateAuthorService";

export default class CreateAuthorController {
    async handle(request: Request, response: Response) {

        const { username, password } = request.body;

        const service = new CreateAuthorService();

        try {
            const createdAuthor = await service.execute({ username, password });
            return response.status(201).json(createdAuthor);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}
