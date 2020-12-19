import { createServer, plugins } from 'restify';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import setupRoutes from './app/routes'

class Server {
	private initDatabase(): void {
		mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			dbName: process.env.DB_NAME
		});
	}

	private initApplication(): void {
		const server = createServer();

		server.use(plugins.bodyParser());
		server.use(plugins.queryParser());

		setupRoutes(server);

		server.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
	}

	public start(): void {
		try {
			this.initDatabase();
			this.initApplication();
		} catch (error) {
			console.error(error);
		}
	}
}

dotenv.config();

new Server().start();

