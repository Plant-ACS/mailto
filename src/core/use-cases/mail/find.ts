import { Mail } from "@core/entities/mail.ts"

export type FindFilterDTO = {
  to?: Mail["to"] | Array<Mail["to"]>
  from?: Mail["to"] | Array<Mail["to"]>
  sendIn?: Mail["sendIn"] | Array<{from: Mail["sendIn"], to: Mail["sendIn"]}> | {from: Mail["sendIn"], to: Mail["sendIn"]}
  dateOfSend?: Mail["dateOfSend"] | Array<{from: Mail["dateOfSend"], to: Mail["dateOfSend"]}> | {from: Mail["dateOfSend"], to: Mail["dateOfSend"]}
  filter: FilterMailDTO
}

export type FilterMailDTO = {
  page: number,
  limit: number,
  order: "ASC" | "DESC",
  orderBy: "uuid" | "subject" | "to" | "from" | "sendIn" | "dateOfSend"
}

export type FindOneDTO = Mail["id"]

export default interface IFindMail {
   findAll: (data: FilterMailDTO) => Promise<Array<Mail>>,
   find: (data: FindFilterDTO) => Promise<Array<Mail>>,
   findOne: (data: FindOneDTO) => Promise<Mail>
}
