export type IAddEmailDTO = string
export default interface IAddEmail {
  add: (data: IAddEmailDTO) => void
}