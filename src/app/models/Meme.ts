import { Schema, model } from 'mongoose'

const MemeSchema = new Schema(
	{
		titulo: String,
		descricao: String,
		ano: Number
	},
	{
		timestamps: true
	}
);

export default model('Meme', MemeSchema);