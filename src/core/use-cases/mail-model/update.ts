import { MailModel } from "@core/entities/mail.ts"

export type UpdateMailModelDTO = Partial<Omit<MailModel, "_id">> & Pick<MailModel, "_id">

export default interface IUpdateMailModel {
  update: (data: UpdateMailModelDTO) => Promise<void>
}
