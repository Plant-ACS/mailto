import { Mail } from "@core/entities/mail.ts"

export type ICancelDTO = Mail["uuid"]

export default interface ICancel {
  cancel: (data: ICancelDTO) => void
}