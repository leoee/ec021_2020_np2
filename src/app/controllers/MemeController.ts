import Meme from '../models/Meme';
import dotenv from 'dotenv';

class MemeController {

	public async create (req: any, res: any): Promise<any> {
		try {
			const response = await Meme.create(req.body);
			return res.json(201, response);
		} catch (error) {
			return res.json(400, { error: "Error during meme creation.", message: error });
		}
	}

	public async update (req: any, res: any): Promise<any> {
		try {
			const { memeId } = req.params
			const response = await Meme.findByIdAndUpdate(memeId, req.body);
			return res.json(200, response);
		} catch (error) {
			return res.json(400, { error: "Error during meme update.", message: error });
		}
	}

	public async load (req: any, res: any): Promise<any> {
		try {
			const response = await Meme.find();
			return res.json(200, response);
		} catch (error) {
			return res.json(400, { error: "Error during meme loading." });
		}
	}

	public async loadById (req: any, res: any): Promise<any> {
		try {
			const { memeId } = req.params
			const response = await Meme.findById(memeId);
			return res.json(200, response);
		} catch (error) {
			return res.json(400, { error: "Error during meme loading." });
		}
	}

	public async delete (req: any, res: any): Promise<any> {
		try {
			const { memeId } = req.params
			const response = await Meme.findOneAndDelete(memeId);
			return res.json(204);
		} catch (error) {
			return res.json(400, { error: "Error during meme deleting." });
		}
	}
	
}

dotenv.config()

export default new MemeController()