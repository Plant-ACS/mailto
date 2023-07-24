import { Group } from "@core/entities/group.ts"

export type RemoveEmailDTO = Group["name"]

export default interface IRemoveEmailOfGroup {
  remove: (data: RemoveEmailDTO | Array<RemoveEmailDTO>) => Promise<void>,
}