import axios from 'axios';
import dotenv from 'dotenv';


class AuthController {
	private static authAxios = axios.create({
		baseURL: process.env.AUTH_URL
	});

  public async login (req: any, res: any): Promise<any> {
		const url = "/login";
		const data = req.body;

		// AuthController.authAxios
		// 	.post(url, data)
		// 	.then((response) => {
		// 		return res.json(response.status, response.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error)
		// 		return res.json(error.response.status, error.response.data);
		// 	});

		AuthController.authAxios({method: "post", url, data})
		.then(response => {
			return res.json(response.status, response.data);
		})
		.catch(error => {
			console.log(error);
			return res.json(error.response.status, error.response.data);
		})
	}
	
	public async validateToken(req: any, res: any, next: any): Promise<any> {
		const url = "/validateToken";
		const token = req.headers.token;

		if (!token) {
			return res.json(400, { error: "Invalid token!" });
		} else {
			const config = {
				headers: {
					token: token,
				},
			};
			AuthController.authAxios
				.post('https://ec021-av2-auth.herokuapp.com/auth/validateToken', {}, config)
				.then((response) => {
					next();
				})
				.catch((error) => {
					return res.json(error.response.status, error.response.data);
				});
		}
	}
}

dotenv.config()

export default new AuthController()