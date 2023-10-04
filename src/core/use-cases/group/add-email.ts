import { AddressEmail } from "@core/entities/mail.ts"
import { Group } from "@core/entities/group.ts"

export type AddEmailDTO = {
	name: Group['name']
	subName: Group['subName']
	email: AddressEmail | Array<AddressEmail>
}
export default interface IAddEmailInGroup {
  add: (data: AddEmailDTO) => Promise<boolean>
}
