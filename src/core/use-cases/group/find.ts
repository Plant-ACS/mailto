import { Group } from "@core/entities/group.ts"
import { AddressEmail } from "@core/entities/mail.ts"

export type IFindFilterDTO = {
  email: AddressEmail | Array<AddressEmail>,
  filter: IFilter
}

export type IFindOneDTO = Group["name"]

export type IFilter = {
  page: number,
  limit: number,
  order: "ASC" | "DESC",
  orderBy: "name" | "email"
}


export default interface IFind {
  findAll: (data: IFilter) => Array<Group>,
  find: (data: IFindFilterDTO) => Array<Group>,
  findOne: (data: IFindOneDTO) => Group
}