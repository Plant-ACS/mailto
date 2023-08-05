import IDeleteMailModel from "@core/use-cases/mail-model/delete.ts";
import { DeleteMailModelDTO } from "@core/use-cases/mail-model/delete.ts";
import MailModelDB from "@database/models/mail-model.ts";

export default class DeleteMailModel implements IDeleteMailModel {
	async delete(data: DeleteMailModelDTO): Promise<void> {
		return await MailModelDB.findByIdAndDelete({data})
			.then((mailmodel)=> {
				if (!mailmodel) throw new Error("Mail Model not found")
				return mailmodel
			})
			.catch((err) => { throw new Error(err) })
	}
}
