import { Mail } from "@core/entities/mail.ts"

export type ICreateDTO = Omit<Mail, "dateOfSend"> & { sendIn: Date | "now" }

export default interface ICreate {
  create: (data: ICreateDTO) => void
}