import axios from 'axios'
import { Next, Request, Response } from 'restify'

class AuthMiddleware {
	public async validateToken(req: Request, res: Response, next: Next): Promise<Response> {
		const { token } = req.headers
		if (!token) {
			return res.json(400, { error: "Inexistent token." })
		}

		const config = {
			headers: { token }
		}

		try {
			await axios.post(`${process.env.AUTH_URL}/validateToken`, {}, config)
			next()
		} catch ({ response }) {
			return res.json(response.status, response.data)
		}
	}
}

export default new AuthMiddleware()
