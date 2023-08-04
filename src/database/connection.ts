import mongoose from 'mongoose'

let connection: typeof mongoose|null = null
async function startConnection() {
	connection = await mongoose.connect(Deno.env.get('MONGO_URL')!)
}

async function getConnection() {
	if (connection == null) {
		await startConnection()
	}
	return connection
}

export default getConnection
