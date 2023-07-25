import { Mail } from "@core/entities/mail.ts";

export type UpdateDTO = Omit<Mail, "sendIn" | "dateOfSend">

export interface IUpdateMail {
  update: (data: UpdateDTO) => Promise<Mail>
}
