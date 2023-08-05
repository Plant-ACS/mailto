import IRenameGroup, { RenameDTO } from "@core/use-cases/group/rename.ts"
import GroupDB from "@database/models/group.ts"

export class RenameGroup implements IRenameGroup {
	async rename(data: RenameDTO): Promise<void> {
		await GroupDB.updateOne({ name: data.old, subName: data.subName }, { name: data.new })
			.catch(err => { throw new Error(err.message) })
	}
}
