import axios from 'axios'
import { Request, Response } from 'restify'
import env from '../../config/env'
class AuthController {
	public async login(req: Request, res: Response): Promise<Response> {
		try {
			const { status, data } = await axios.post(`${env.authUrl}/login`, req.body)
			return res.json(status, data)
		} catch ({ response }) {
			return res.json(response.status, response.data)
		}
	}
}

export default new AuthController()
