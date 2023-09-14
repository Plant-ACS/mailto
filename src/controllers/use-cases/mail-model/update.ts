import IUpdateMailModel, { UpdateMailModelDTO } from "@core/use-cases/mail-model/update.ts"
import MailModelDB from "@database/models/mail-model.ts"
import { MailModel } from "@core/entities/mail.ts"

export default class UpdateMailModel implements IUpdateMailModel {
	async update(data: UpdateMailModelDTO): Promise<MailModel> {
		return await MailModelDB.findByIdAndUpdate({data})
			.then((mailmodel) => {
				if (!mailmodel) throw new Error("Mail Model not found")
				return mailmodel
			})
			.catch((err) => { throw new Error(err) })
	}
}
