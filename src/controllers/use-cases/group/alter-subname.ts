import IAlterSubNameOfGroup, { AlterSubNameDTO,AlterSubNameOfGroupDTO } from "@core/use-cases/group/alter-subname.ts"
import GroupDB from "@database/models/group.ts"

export default class AlterSubNameOfGroup implements IAlterSubNameOfGroup {
	async alterSubNameOfGroup(data: AlterSubNameOfGroupDTO): Promise<void> {
		await GroupDB.findByIdAndUpdate(data.group.name, { subName: data.newSubName })
			.catch((err) => { throw new Error(err) })
	}
	async renameSubName(data: AlterSubNameDTO): Promise<void> {
		await GroupDB.updateMany({ subName: data.old }, { subName: data.new })
			.catch((err) => { throw new Error(err) })
	}
}
