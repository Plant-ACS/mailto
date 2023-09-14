import { FilterMailModelDTO, FindOneMailModelDTO, IFindMailModel } from "@core/use-cases/mail-model/find.ts";
import MailModelDB from "@database/models/mail-model.ts";
import { MailModel } from "@core/entities/mail.ts";

export default class FindMailModel implements IFindMailModel {
	async findAll(data: FilterMailModelDTO): Promise<MailModel[]> {
		const documents = await MailModelDB.find(data)
		const mailModels = documents.map((document => ({
			_id: document._id.toString(),
			subject: document.subject,
			body: document.body,
			isMD: document.isMD,
			files: document.files
		})))
		return mailModels
	}
	async findOne(data: FindOneMailModelDTO): Promise<MailModel> {
		return await MailModelDB.findById(data)
			.then((mailmodel) => {
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
			.catch((err: Error) => { throw new Error(err.message) })
	}
}
