import { Router, Response } from 'express';
import { CreateAuthorController } from './controllers/authors/CreateAuthorController';
import { LoginAuthorController } from './controllers/authors/LoginAuthorController';


import { FindPoetryController } from './controllers/poetrys/FindPoetryController';

import { ListPoetryByTagController } from './controllers/poetrys/ListPoetryByTagController';
import { ListPoetryController } from './controllers/poetrys/ListPoetryController';
import { CreatePoetryController } from './controllers/poetrys/CreatePoetryService';
import { AddLikeController, RemoveLikeController } from './controllers/poetrys/LikeController';

const router = Router();

router.get('/hello-world', (_, response: Response) => {
    return response.json({ message: "Tudo funcionando!" });
});

// Authors routes
router.post('/author', new CreateAuthorController().handle);
router.post('/login', new LoginAuthorController().handle);

// Poetry routes
router.post('/create-poetry', new CreatePoetryController().handle);
router.get('/poetry', new ListPoetryController().handle);

router.get('/get-poetry-by-id/:id', new FindPoetryController().handle);
router.get('/get-poety-by-tag/:tag', new ListPoetryByTagController().handle);

router.post('/poetry/like', new AddLikeController().handle);
router.post('/poetry/deslike', new RemoveLikeController().handle);

export { router };
