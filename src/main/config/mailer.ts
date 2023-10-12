import mailer from "nodemailer"

let client: mailer.Transporter | null = null

export function connect() {
	client = mailer.createTransport({
		host: "sandbox.smtp.mailtrap.io",
		port: 465,
		auth: {
			user: "e8a31150874e1e",
			pass: "4249cbe1cb2a33"
		},
		secure: true,
		debug: true
	});

	client.on("idle", () => client = null)
	client.on("error", (e) => console.error("Error on mailer client: "+e))

	client.verify(function(error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log("Server is ready to take our messages");
			return false;
		}
	});

}

export function getMailerClient() {
	if(client == null)
		connect()
	return client
}
