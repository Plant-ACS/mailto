import "dotenv"
//@deno-types="npm:@types/express@4"
import express from "$express"
import router from "./v1/routes/index.ts"
import getConnectionDB from "@database/connection.ts"

const app = express()
const port = Deno.env.get("PORT") || 8080

// await getConnectionDB().then(() => console.log("connected to database"))
// .catch((e) => console.error("Error on connect to database: "+e))

app.use(express.json())
app.use("/v1", router)

app.listen(port, () => console.log(`started in localhost:${port}`))
