import getConnection from "@database/connection.ts"

const { Schema, model } = await getConnection()

const MailModelSchema = new Schema({
	_id: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	isMD: {
		type: Schema.Types.Boolean,
		required: true,
	},
	files: [String],
})

const MailModelDB = model('MailModel', MailModelSchema)
export default MailModelDB
