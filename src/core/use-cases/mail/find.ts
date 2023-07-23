import { Mail } from "@core/entities/mail.ts"

export type IFindFilterDTO = {
  to?: Mail["to"] | Array<Mail["to"]>
  from?: Mail["to"] | Array<Mail["to"]>
  sendIn?: Mail["sendIn"] | Array<{from: Mail["sendIn"], to: Mail["sendIn"]}> | {from: Mail["sendIn"], to: Mail["sendIn"]}
  dateOfSend?: Mail["dateOfSend"] | Array<{from: Mail["dateOfSend"], to: Mail["dateOfSend"]}> | {from: Mail["dateOfSend"], to: Mail["dateOfSend"]}
  filter: IFilter
}

export type IFilter = {
    page: number,
    limit: number,
    order: "ASC" | "DESC",
    orderBy: "uuid" | "subject" | "to" | "from" | "sendIn" | "dateOfSend"
}


export type IFindOneDTO = Mail["uuid"]

export default interface IFind {
   findAll: (data: IFilter) => Array<Mail>,
   find: (data: IFindFilterDTO) => Array<Mail>,
   findOne: (data: IFindOneDTO) => Mail
}
