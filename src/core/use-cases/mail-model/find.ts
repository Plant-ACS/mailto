import { MailModel } from "@core/entities/mail.ts"

export type FindOneMailModelDTO = MailModel["id"]
export type FilterMailModelDTO = {
  page: number,
  limit: number,
  order: "ASC" | "DESC",
  orderBy: "uuid" | "subject"
}

export interface IFindMailModel {
  findAll: (data: FilterMailModelDTO) => Promise<Array<MailModel>>,
  findOne: (data: FindOneMailModelDTO) => Promise<MailModel>
}
