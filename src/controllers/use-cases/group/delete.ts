import IDeleteGroup, { DeleteDTO } from "@core/use-cases/group/delete.ts"
import { Group } from "@core/entities/group.ts"
import GroupDB from "@database/models/group.ts"

export default class DeleteGroup implements IDeleteGroup {
	async delete(data: DeleteDTO): Promise<Group> {
		return await GroupDB.findOneAndDelete({ name: data.name, subName: data.subName })
			.then((group) => {
				if (!group) throw new Error('Group not found')
				return group
			})
			.catch((err) => { throw new Error(err) })
	}
}
