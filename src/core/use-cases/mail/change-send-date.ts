import { Mail } from "@core/entities/mail.ts"

export type ChangeSendDateDTO = Pick<Mail, "id" | "sendIn">

export default interface IChangeSendDateOfMail {
  changeSendDate: (data: ChangeSendDateDTO) => Promise<void>
}
