import { Mail } from "@core/entities/mail.ts";

export type IUpdateDTO = Omit<Mail, "sendIn" | "dateOfSend">

export interface IUpdate {
  update: (data: IUpdateDTO) => Mail
}