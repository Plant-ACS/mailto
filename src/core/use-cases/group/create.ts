import { Group } from "@core/entities/group.ts"

export type ICreateDTO = Omit<Group, "emails">

export default interface ICreate {
  create: (data: ICreateDTO) => Group
}