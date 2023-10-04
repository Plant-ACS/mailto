import IFindGroup, { FilterGroupDTO,FindFilterDTO, FindOneDTO, findAllBySubNameDTO } from "@core/use-cases/group/find.ts"
import { Group } from "@core/entities/group.ts"
import GroupDB from "@database/models/group.ts"

export default class FindGroup implements IFindGroup {
	async findAll(data: FilterGroupDTO): Promise<Group[]> {
		return await GroupDB.find(data)
	}
	async findAllBySubName(data: findAllBySubNameDTO): Promise<Group[]> {
		return await GroupDB.find({subName: data.subName}, data.filter)
	}
	async find(data: FindFilterDTO): Promise<Group[]> {
		return await GroupDB.find({data}, )
	}
	async findOne(data: FindOneDTO): Promise<Group> {
		return await GroupDB.findOne(data)
			.then((group) => {
				if (!group) throw new Error('Group not found')
				return group
			})
			.catch((err: Error) => { throw new Error(err.message) })
	}

}
