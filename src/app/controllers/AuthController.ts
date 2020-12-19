import axios from 'axios';
import { Next, Request, Response } from 'restify'

class AuthController {
	public async login(req: Request, res: Response): Promise<Response> {
		try {
			const { status, data } = await axios.post(`${process.env.AUTH_URL}/login`, req.body);
			return res.json(status, data);
		} catch ({ response }) {
			return res.json(response.status, response.data);
		}
	}

	public async validateToken(req: Request, res: Response, next: Next): Promise<Response> {
		const { token } = req.headers;
		if (!token) {
			return res.json(400, { error: "Inexistent token." });
		}

		const config = {
			headers: { token }
		};

		try {
			await axios.post(`${process.env.AUTH_URL}/validateToken`, {}, config);
			next();
		} catch ({ response }) {
			return res.json(response.status, response.data);
		}
	}
}

export default new AuthController()