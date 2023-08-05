import { MailModel } from "@core/entities/mail.ts"

export type DeleteMailModelDTO = MailModel["_id"]

export default interface IDeleteMailModel {
  delete: (data: DeleteMailModelDTO) => Promise<void>
}
