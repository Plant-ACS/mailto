import IAddEmailInGroup, { AddEmailDTO } from "@core/use-cases/group/add-email.ts"
import GroupDB from "@database/models/group.ts"

export default class AddEmailInGroup implements IAddEmailInGroup {
	async add(data: AddEmailDTO): Promise<void> {
		if(data.email instanceof Array)
			await GroupDB.findOneAndUpdate({name: data.name, subName: data.subName}, {$addToSet: {emails: {$each: data.email}}})
				.then((_group) => { })
				.catch((err) => {throw new Error(err.message)})
		else
			await GroupDB.findOneAndUpdate({name: data.name, subName: data.subName}, {$addToSet: {emails: data.email}})
				.then((_group) => { })
				.catch((err) => {throw new Error(err.message)})
	}
}
