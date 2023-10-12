//@deno-types="npm:@types/express@4"
import { Router } from "express"
import { getMailerClient } from "@main/config/mailer"

const mailRoutes = Router()

mailRoutes.post("/send", async (req, res) => {
	const { subject, to, message } = req.body

	if (!subject || !to || !message)
		return res.status(400).json({ error: "Missing required fields" })

	return await getMailerClient()!.sendMail({
		from: "a@gmail.com",
		to,
		subject,
		text: message
	}).then((e) => res.status(200).json({ message: "Email sent", id: e.messageId }))
	.catch((e) => {
		res.status(500).json({ error: e.message })
		console.error("Error on send email: "+e.message)
	})
})

export default mailRoutes
