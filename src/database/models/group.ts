import { model, Schema } from "mongoose"

const GroupSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	subName: {
		type: String,
		required: true,
		unique: true,
	},
	emails: [String],
})

export default model('Group', GroupSchema)
