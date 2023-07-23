import { Mail } from "@core/entities/mail.ts"

export type IChangeSendDateDTO = Pick<Mail, "uuid" | "sendIn">

export default interface IChangeSendDate {
  changeSendDate: (data: IChangeSendDateDTO) => void
}