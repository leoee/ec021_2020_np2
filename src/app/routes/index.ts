  
import { Server } from 'restify'
import setupAuthRoutes from './AuthRoutes'
import setupMemeRoutes from './MemeRoutes'

// Exporting setup for all routes
export default (server: Server): void => {
    setupAuthRoutes(server)
    setupMemeRoutes(server)
}
