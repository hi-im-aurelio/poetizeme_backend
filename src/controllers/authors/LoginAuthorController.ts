import { Response, Request } from "express";
import { LoginAuthorService } from "../../services/authors/LoginAuthorService";

class LoginAuthorController {
    async handle(request: Request, response: Response) {
        const _service = new LoginAuthorService();

        const { username, password } = request.body;

        try {
            const _author = await _service.execute({ username, password });
            return response.status(201).json(_author);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { LoginAuthorController };