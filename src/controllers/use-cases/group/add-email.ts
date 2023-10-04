import IAddEmailInGroup, { AddEmailDTO } from "@core/use-cases/group/add-email.ts"
import GroupDB from "@database/models/group.ts"

export default class AddEmailInGroup implements IAddEmailInGroup {
	async add(data: AddEmailDTO): Promise<boolean> {
		if(data.email instanceof Array)
			return await GroupDB.findOneAndUpdate({name: data.name, subName: data.subName}, {$addToSet: {emails: {$each: data.email}}})
				.then((_group) => true)
				.catch((err) => {throw new Error(err.message)})
		else
			return await GroupDB.findOneAndUpdate({name: data.name, subName: data.subName}, {$addToSet: {emails: data.email}})
				.then((_group) => true)
				.catch((err) => {throw new Error(err.message)})
	}
}
