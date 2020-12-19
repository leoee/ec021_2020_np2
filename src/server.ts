import { createServer, plugins } from 'restify'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import setupRoutes from './app/routes'
import env from './config/env'

class Server {
	// Initializing database with configs
	private initDatabase(): void {
		mongoose.connect(env.dbUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			dbName: env.dbName
		})
	}

	// Initilizing server on 8080 and configuring bodyParser and queryParser
	private initApplication(): void {
		const server = createServer()

		server.use(plugins.bodyParser())
		server.use(plugins.queryParser())

		// Call setupRoutes to set all routes
		setupRoutes(server)

		server.listen(env.port, () => console.log(`Server running on ${env.port}`))
	}

	public start(): void {
		try {
			this.initDatabase()
			this.initApplication()
		} catch (error) {
			console.error(error)
		}
	}
}

dotenv.config()

// Creating an instance of server and calling start
new Server().start()
