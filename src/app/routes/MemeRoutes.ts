import { Server } from 'restify'
import { Router } from 'restify-router';
import MemeController from '../controllers/MemeController';
import AuthController from '../controllers/AuthController';

export default (server: Server): void => {
    const router = new Router();
  
    router.post('/meme', AuthController.validateToken, MemeController.create);
    router.patch('/meme/:memeId', AuthController.validateToken, MemeController.update);
    router.get('/meme', AuthController.validateToken, MemeController.load);
    router.get('/meme/:memeId', AuthController.validateToken, MemeController.loadById);
    router.del('/meme/:memeId', AuthController.validateToken, MemeController.delete);
    router.applyRoutes(server);
}