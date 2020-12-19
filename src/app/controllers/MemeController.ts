import { Request, Response } from 'restify'
import Meme from '../models/Meme'

class MemeController {
	public async create (req: Request, res: Response): Promise<Response> {
		try {
			const meme = await Meme.create(req.body)
			return res.json(201, meme)
		} catch (error) {
			return res.json(400, { error: "Error during meme creating.", message: error })
		}
	}

	public async update (req: Request, res: Response): Promise<Response> {
		try {
			const { memeId } = req.params
			const meme = await Meme.findByIdAndUpdate(memeId, req.body, { new: true })
			return res.json(200, meme)
		} catch (error) {
			return res.json(400, { error: "Error during meme updating.", message: error })
		}
	}

	public async load (_: Request, res: Response): Promise<Response> {
		try {
			const memes = await Meme.find()
			return res.json(200, memes)
		} catch (error) {
			return res.json(400, { error: "Error during memes loading.", message: error })
		}
	}

	public async loadById (req: Request, res: Response): Promise<Response> {
		try {
			const { memeId } = req.params
			const meme = await Meme.findById(memeId)
			return res.json(200, meme)
		} catch (error) {
			return res.json(400, { error: "Error during meme loading.", message: error })
		}
	}

	public async delete (req: Request, res: Response): Promise<Response> {
		try {
			const { memeId } = req.params
			await Meme.findByIdAndDelete(memeId)
			return res.json(204)
		} catch (error) {
			return res.json(400, { error: "Error during meme deleting.", message: error })
		}
	}
}

export default new MemeController()
