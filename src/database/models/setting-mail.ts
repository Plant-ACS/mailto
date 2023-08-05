import getConnection from "@database/connection.ts"

const { Schema, model } = await getConnection()

const SettingMailSchema = new Schema({
	host: {
		type: String,
		required: true,
	},
	port: {
		type: Number,
		required: true,
	},
	tls: {
		type: Boolean,
		default: true,
		required: true,
	},
	auth: {
		type: {
			user: {
				type: String,
				required: true,
			},
			pass: {
				type: String,
				required: true,
			}
		},
		required: true,
		select: false,
	},
	address: {
		type: String,
		required: true,
		index: true,
		unique: true
	},
}, { _id: false })

const SettingMailModelDB = model('SettingMail', SettingMailSchema)

export default SettingMailModelDB
