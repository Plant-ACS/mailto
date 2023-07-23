import { Group } from "@core/entities/group.ts"

export type IRenameDTO  = {
  oldName: Group["name"],
  newName: Group["name"]
}

export default interface IRemoveEmail {
  rename: (data: IRenameDTO) => void
}