import IRemoveEmailOfGroup, { RemoveEmailDTO } from "@core/use-cases/group/remove-email.ts"
import GroupDB from "@database/models/group.ts"

export default class RemoveEmailOfGroup implements IRemoveEmailOfGroup {
	async remove(data: RemoveEmailDTO): Promise<void> {
		await GroupDB.updateOne({ name: data.name, subName: data.subName }, { $pull: { emails: data.email } })
	}
}
