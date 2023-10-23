import { Router, Response } from 'express';
import { CreateAuthorController } from './controllers/authors/CreateAuthorController';
import { LoginAuthorController } from './controllers/authors/LoginAuthorController';

const router = Router();

router.get('/hello-world', (_, response: Response) => {
    return response.json({ message: "Tudo funcionando!" });
});

// Authors routes
router.post('/author', new CreateAuthorController().handle);

router.post('/login', new LoginAuthorController().handle);

export { router };