import { Response, Request } from "express";
import { LoginAuthorService } from "../../services/authors/LoginAuthorService";

class LoginAuthorController {
    async handle(request: Request, response: Response) {
        const _service = new LoginAuthorService();

        const { username, password } = request.body;

        const _author = await _service.execute({ username, password });

        return response.json(_author);
    }
}

export { LoginAuthorController };