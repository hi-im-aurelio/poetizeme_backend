import { Response, Request } from "express";
import { CreateAuhorService } from "../../services/authors/CreateAuthorService";

class CreateAuthorController {
    async handle(request: Request, response: Response) {

        const { username, password } = request.body;

        const _sevice = new CreateAuhorService();
        const _author = await _sevice.execute({ username, password });

        return response.json(_author);
    }
}


export { CreateAuthorController }