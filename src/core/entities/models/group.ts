import { z } from "zod"
import AddressEmailSchema from "./address-email.ts"

const GroupSchema = z.object({
  name: z.string().min(5).max(10).trim(),
  subName: z.string().min(3).max(8).trim(),
  emails: z.array(AddressEmailSchema)
})

export default GroupSchema
