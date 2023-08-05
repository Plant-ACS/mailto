import { Mail } from "@core/entities/mail.ts"

export type CancelDTO = Mail["_id"]

export default interface ICancelMail {
  cancel: (data: CancelDTO) => Promise<void>
}
