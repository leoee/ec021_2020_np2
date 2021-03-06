import { Server } from 'restify'
import { Router } from 'restify-router'
import AuthController from '../controllers/AuthController'

// Exporting login route
export default (server: Server): void => {
    const router = new Router()

    router.post('/login', AuthController.login)
    router.applyRoutes(server, '/auth')
}
