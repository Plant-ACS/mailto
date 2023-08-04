import { model, Schema } from "mongoose"

const MailModelSchema = new Schema({
	subject: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	isMD: {
		type: Boolean,
		required: true,
	},
	files: [String],
})

export default model('MailModel', MailModelSchema)
