import { Router } from 'restify-router';
import dotenv from 'dotenv';
import AuthController from '../controllers/AuthController';

class AuthRoutes {
  public routes: Router;

  public constructor () {
    this.routes = new Router();
    this.setRoutes()
  }

  private setRoutes (): void {
    this.routes.post('/login', AuthController.login)
  }
}

dotenv.config()

export default new AuthRoutes().routes