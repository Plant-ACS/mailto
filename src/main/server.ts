import "dotenv"
import express from "express"

import { getMailerClient } from "@main/config/mailer"

import router from "./v1/routes"

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

getMailerClient()
app.get("/", (req, res) => {
	res.send("Hello World")
})

app.use("/api/v1", router)
app.listen(port, () => console.log(`started in ${process.env.HOST || "localhost"}:${port}`))
