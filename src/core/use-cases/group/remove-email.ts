import { Group } from "@core/entities/group.ts"

export type IRemoveEmailDTO = Group["name"]

export default interface IRemoveEmail {
  remove: (data: IRemoveEmailDTO | Array<IRemoveEmailDTO>) => void,
}