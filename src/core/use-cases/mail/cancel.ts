import { Mail } from "@core/entities/mail.ts"

export type CancelDTO = Mail["id"]

export default interface ICancelMail {
  cancel: (data: CancelDTO) => Promise<void>
}