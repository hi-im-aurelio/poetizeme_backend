import { Response, Request } from "express";
import DeleteAuthorService from "../../services/authors/DeleteAuthorService";

export default class DeleteAuthorController {
    async handle(request: Request, response: Response) {
        const _service = new DeleteAuthorService();

        const { id } = request.params;

        try {
            await _service.execute(id);
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({ error: 'Erro ao excluir autor.' });
        }
    }
}
