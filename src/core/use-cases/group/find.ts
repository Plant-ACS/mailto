import { Group } from "@core/entities/group.ts"
import { AddressEmail } from "@core/entities/mail.ts"

export type FindFilterDTO = {
  email: AddressEmail | Array<AddressEmail>,
  filter: FilterGroupDTO
}

export type FindOneDTO = Omit<Group, "emails">

export type FilterGroupDTO = {
  page: number,
  limit: number,
  order: "ASC" | "DESC",
  orderBy: "name" | "email"
}


export default interface IFindGroup {
  findAll: (data: FilterGroupDTO) => Promise<Array<Group>>,
  find: (data: FindFilterDTO) => Promise<Array<Group>>,
  findOne: (data: FindOneDTO) => Promise<Group>
}
