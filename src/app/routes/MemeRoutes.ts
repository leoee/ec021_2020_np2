import { Router } from 'restify-router';
import dotenv from 'dotenv';
import MemeController from '../controllers/MemeController';
import AuthController from '../controllers/AuthController';

class MemeRoutes {
  public routes: Router;

  public constructor () {
    this.routes = new Router();
    this.setRoutes()
  }

  private setRoutes (): void {
    this.routes.post('/meme', AuthController.validateToken, MemeController.create)
    this.routes.patch('/meme/:memeId', AuthController.validateToken, MemeController.update)
    this.routes.get('/meme', AuthController.validateToken, MemeController.load)
    this.routes.get('/meme/:memeId', AuthController.validateToken, MemeController.loadById)
    this.routes.del('/meme/:memeId', AuthController.validateToken, MemeController.delete)
  }
}

dotenv.config()

export default new MemeRoutes().routes