import IDeleteMailModel from "@core/use-cases/mail-model/delete.ts";
import { DeleteMailModelDTO } from "@core/use-cases/mail-model/delete.ts";
import MailModelDB from "@database/models/mail-model.ts";
import { MailModel } from "@core/entities/mail.ts";

export default class DeleteMailModel implements IDeleteMailModel {
	async delete(data: DeleteMailModelDTO): Promise<MailModel> {
		return await MailModelDB.findByIdAndDelete({data})
			.then((mailmodel)=> {
				if (!mailmodel) throw new Error("Mail Model not found")
				const mailModel: MailModel = {
					_id: mailmodel._id.toString(),
					subject: mailmodel.subject,
					body: mailmodel.body,
					isMD: mailmodel.isMD,
					files: mailmodel.files
				}
				return mailModel
			})
			.catch((err) => { throw new Error(err) })
	}
}
