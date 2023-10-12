//@deno-types=@types/mailer
import mailer from "mailer"

let client: mailer.Transporter | null = null

export function connect() {
	const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = Deno.env.toObject()
	client = mailer.createTransport({
		host: MAIL_HOST,
		port: parseInt(MAIL_PORT),
		auth: {
			user: MAIL_USER,
			pass: MAIL_PASS
		},
		debug: true
	});

	client.on("idle", () => { client = null; connect()})
	client.on("error", (e) => console.error("Error on mailer client: "+e))

	client.verify(function(error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log("mailer server is ready");
			return false;
		}
	});

}

export function getMailerClient() {
	if(client == null)
		connect()
	return client
}
