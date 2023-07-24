import { Group } from "@core/entities/group.ts"

export type CreateDTO = Omit<Group, "emails">

export default interface ICreateGroup {
  create: (data: CreateDTO) => Promise<Group>
}