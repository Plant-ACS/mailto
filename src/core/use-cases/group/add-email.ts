import { AddressEmail } from "@core/entities/mail.ts"

export type IAddEmailDTO = AddressEmail
export default interface IAddEmail {
  add: (data: IAddEmailDTO) => void
}