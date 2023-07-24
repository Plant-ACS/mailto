import { Group } from "@core/entities/group.ts"

export type RenameDTO  = {
  old: Group["name"],
  new: Group["name"]
}

export default interface IRenameGroup {
  rename: (data: RenameDTO) => Promise<void>
}