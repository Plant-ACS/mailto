import { Group } from "@core/entities/group.ts"

export type DeleteDTO = Omit<Group, "emails">

export default interface IDeleteGroup {
  delete: (data: DeleteDTO) => Promise<Group>
}
