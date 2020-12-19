import { createServer, plugins } from 'restify'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import setupRoutes from './app/routes'
import env from './config/env'

class Server {
	private initDatabase(): void {
		mongoose.connect(env.dbUrl, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			dbName: env.dbName
		})
	}

	private initApplication(): void {
		const server = createServer()

		server.use(plugins.bodyParser())
		server.use(plugins.queryParser())

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
new Server().start()
