import { Group } from "@core/entities/group.ts"

export type IRenameDTO  = {
  old: Group["name"],
  new: Group["name"]
}

export default interface IRemoveEmail {
  rename: (data: IRenameDTO) => void
}