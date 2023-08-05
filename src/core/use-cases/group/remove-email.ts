import { Group } from "@core/entities/group.ts"
import { AddressEmail } from "@core/entities/mail.ts"

export type RemoveEmailDTO = {
	name: Group['name'],
	subName: Group['subName'],
	email: AddressEmail,
}

export default interface IRemoveEmailOfGroup {
  remove: (data: RemoveEmailDTO) => Promise<void>,
}
