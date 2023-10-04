import getConnection from "@database/connection.ts"

const { Schema, model } = await getConnection()

const GroupSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	subName: {
		type: String,
		required: true,
	},
	emails: [String],
})

GroupSchema.index({ name: 1, subName: 1 }, { unique: true })

const GroupDB = model('Group', GroupSchema)
export default GroupDB
