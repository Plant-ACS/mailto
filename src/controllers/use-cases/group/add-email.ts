import io from "$socket"
import IAddEmailInGroup from "@core/use-cases/group/add-email.ts"

export default class AddEmailInGroup implements IAddEmailInGroup {
  add(data: string): Promise<void> {
		throw new Error("Method not implemented.")
  }
}
