import IUpdateMailModel from "@core/use-cases/mail-model/update.ts";
import MailModelDB from "@database/models/mail-model.ts";

export default class UpdateMailModelDTO implements IUpdateMailModel {
	async update(data: UpdateMailModelDTO): Promise<void> {
		return await MailModelDB.findByIdAndUpdate({data})
			.then((mailmodel) => {
				if (!mailmodel) throw new Error("Mail Model not found")
				return mailmodel
			})
			.catch((err) => { throw new Error(err) })
	}
}
