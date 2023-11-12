import { Router, Response } from 'express';
import CreateAuthorController from './controllers/authors/CreateAuthorController';
import { LoginAuthorController } from './controllers/authors/LoginAuthorController';


import { FindPoetryController } from './controllers/poetrys/FindPoetryController';

import { ListPoetryByTagController } from './controllers/poetrys/ListPoetryByTagController';
import { ListPoetryController } from './controllers/poetrys/ListPoetryController';
import { CreatePoetryController } from './controllers/poetrys/CreatePoetryService';
import { AddLikeController, RemoveLikeController } from './controllers/poetrys/LikeController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { GetPoetryByDateController } from './controllers/poetrys/GetPoetryByDateController';
import DeleteAuthorController from './controllers/authors/DeleteAuthorController';

const router = Router();

router.get('/', (_, response: Response) => {
    return response.json({ message: "Poemas em Servidor!" });
});

// Authors routes
router.post('/author', new CreateAuthorController().handle);
router.post('/login', new LoginAuthorController().handle);
router.delete('/delete-author', isAuthenticated, new DeleteAuthorController().handle);


// Poetry routes
router.post('/poetry/like', isAuthenticated, new AddLikeController().handle);
router.post('/poetry/deslike', isAuthenticated, new RemoveLikeController().handle);
router.post('/create-poetry', isAuthenticated, new CreatePoetryController().handle);

router.post('/get-poetry-date-between', new GetPoetryByDateController().handle);

router.get('/poetry', new ListPoetryController().handle);

router.get('/get-poetry-by-id/:id', new FindPoetryController().handle);
router.get('/get-poety-by-tag/:tag', new ListPoetryByTagController().handle);

export { router };
