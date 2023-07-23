//@deno-types="npm:@types/express@4"
import express from "$express"
import router from "./routes/index.ts"

const app = express()
const port = Deno.env.get("PORT") || 8080

app.use(express.json())

app.use(router)
app.listen(port, () => console.log(`started in localhost:${port}`))
