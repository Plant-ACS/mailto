import { Group } from "@core/entities/group.ts"

export type IAlterSubNameOfGroupDTO = {
  group: {
    name: Group['name'],
    subName: Group['subName']
  }
  newSubName: Group['subName']
}

export type IAlterSubNameDTO = {
  old: Group['subName'],
  new: Group['subName']
}

export default interface IAlterSubName {
  alterSubNameOfGroup: (data: IAlterSubNameOfGroupDTO) => void,
  renameSubName: (data: IAlterSubNameDTO) => void
}