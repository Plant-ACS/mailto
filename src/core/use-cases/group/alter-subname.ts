import { Group } from "@core/entities/group.ts"

export type AlterSubNameOfGroupDTO = {
  group: {
    name: Group['name'],
    subName: Group['subName']
  }
  newSubName: Group['subName']
}

export type AlterSubNameDTO = {
  old: Group['subName'],
  new: Group['subName']
}

export default interface IAlterSubNameOfGroup {
  alterSubNameOfGroup: (data: AlterSubNameOfGroupDTO) => Promise<void>,
  renameSubName: (data: AlterSubNameDTO) => Promise<void>
}
