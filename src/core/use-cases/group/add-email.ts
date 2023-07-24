import { AddressEmail } from "@core/entities/mail.ts"

export type AddEmailDTO = AddressEmail
export default interface IAddEmailInGroup {
  add: (data: AddEmailDTO) => Promise<void>
}