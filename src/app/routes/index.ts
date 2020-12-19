  
import { Server } from 'restify'
import setupAuthRoutes from './AuthRoutes'
import setupMemeRoutes from './MemeRoutes'

export default (server: Server): void => {
    setupAuthRoutes(server)
    setupMemeRoutes(server)
}
