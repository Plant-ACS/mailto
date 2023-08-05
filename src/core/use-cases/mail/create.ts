import { Mail } from "@core/entities/mail.ts"

export type CreateDTO = Omit<Mail, "_id" | "dateOfSend" | "sendIn"> & { sendIn: Date | "now" }
export default interface ICreateMail {
  create: (data: CreateDTO) => Promise<void>
}
