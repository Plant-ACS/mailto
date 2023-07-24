import { MailModel } from "@core/entities/mail.ts"

export type UpdateMailModelDTO = Partial<Omit<MailModel, "id">> & Pick<MailModel, "id">

export default interface IUpdateMailModel {
  update: (data: UpdateMailModelDTO) => Promise<void>
}