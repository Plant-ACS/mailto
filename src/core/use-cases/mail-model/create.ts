import { MailModel } from "@core/entities/mail.ts"

export type IModelMailDTO = Omit<MailModel, "_id">

export default interface ICreateMailModel {
  create: (data: IModelMailDTO) => Promise<MailModel>
}
