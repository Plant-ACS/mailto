import { Group } from "@core/entities/group.ts"

export type IDeleteDTO = Omit<Group, "emails">

export default interface IDelete {
  delete: (data: IDeleteDTO) => Group
}