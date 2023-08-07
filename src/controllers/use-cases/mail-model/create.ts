import { MailModel } from "@core/entities/mail.ts"
import ICreateMailModel, { IModelMailDTO } from "@core/use-cases/mail-model/create.ts"
import MailModelDB from "@database/models/mail-model.ts"

export default class CreateMailModel implements ICreateMailModel {
	async create(data: IModelMailDTO): Promise<MailModel> {
		return await MailModelDB.create(data)
		.then((mailmodel) => mailmodel as unknown as MailModel)
		.catch((_err) => { throw new Error("Error on creating mail Model")})
	}

}
