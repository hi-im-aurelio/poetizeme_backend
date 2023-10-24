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
router.post('/poetry', new CreatePoetryController().handle);

router.get('/poetry/:id', new FindPoetryController().handle);
router.get('/poetry/:tagName', new ListPoetryByTagController().handle);

router.post('/poetry/:id/like', new AddLikeController().handle);
router.post('/poetry/:id/deslike', new RemoveLikeController().handle);
router.get('/poetry', new ListPoetryController().handle);

export { router };
