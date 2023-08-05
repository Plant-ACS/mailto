import { FilterMailModelDTO, FindOneMailModelDTO, IFindMailModel } from "@core/use-cases/mail-model/find.ts";
import MailModelDB from "@database/models/mail-model.ts";
import { MailModel } from "@core/entities/mail.ts";

export default class FindMailModel implements IFindMailModel {
	async findAll(data: FilterMailModelDTO): Promise<MailModel[]> {
		return await MailModelDB.find(data)
	}
	async findOne(data: FindOneMailModelDTO): Promise<MailModel> {
		return await MailModelDB.findOne(data)
			.then((mailmodel) => {
				if (!mailmodel) throw new Error("Mail Model not found")
				return mailmodel
			})
			.catch((err: Error) => { throw new Error(err.message) })
	}
}
