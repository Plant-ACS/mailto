import "dotenv"
//@deno-types="npm:@types/express@4"
import express from "$express"
import router from "./routes/index.ts"

const app = express()
const port = Deno.env.get("PORT") || 8080

app.use(express.json())

app.get("/", (req, res) => {
	res.send("Hello World")
})

app.use("/api/v1", router)
app.listen(port, () => console.log(`started in localhost:${port}`))
