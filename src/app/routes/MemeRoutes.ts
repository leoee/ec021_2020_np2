import { Server } from 'restify'
import { Router } from 'restify-router'
import MemeController from '../controllers/MemeController'
import AuthMiddleware from '../middlewares/AuthMiddleware'

export default (server: Server): void => {
    const router = new Router()
  
    router.post('/meme', AuthMiddleware.validateToken, MemeController.create)
    router.patch('/meme/:memeId', AuthMiddleware.validateToken, MemeController.update)
    router.get('/meme', AuthMiddleware.validateToken, MemeController.load)
    router.get('/meme/:memeId', AuthMiddleware.validateToken, MemeController.loadById)
    router.del('/meme/:memeId', AuthMiddleware.validateToken, MemeController.delete)
    router.applyRoutes(server)
}
