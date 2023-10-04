import ICreateGroup, { CreateDTO } from "@core/use-cases/group/create.ts"
import { Group } from "@core/entities/group.ts"
import GroupDB from "@database/models/group.ts"

export default class CreateGroup implements ICreateGroup {

	async create(data: CreateDTO): Promise<Group> {
		return await GroupDB.create(data)
			.then((group) => group)
			.catch((err) => { throw new Error("erro ao criar grupo") })
	}
}
