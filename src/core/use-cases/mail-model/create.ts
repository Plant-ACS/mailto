import { MailModel } from "@core/entities/mail.ts"

export type IModelMailDTO = Omit<MailModel, 'id'>

export default interface ICreateMailModel {
  create: (data: IModelMailDTO) => Promise<MailModel>
}
