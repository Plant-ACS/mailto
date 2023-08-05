import { z } from "zod"
import AddressEmailSchema from "@core/entities/models/address-email.ts"
import FileSchema from "@core/entities/models/file.ts"

const MailSchema = z.object({
  _id: z.string().uuid(),
  to: AddressEmailSchema,
  from: AddressEmailSchema,
  cc: z.array(AddressEmailSchema).optional(),
  cco: z.array(AddressEmailSchema).optional(),
  subject: z.string().min(5).max(25),
  body: z.string(),
  isMD: z.boolean(),
  files: z.array(FileSchema).optional(),
  sendIn: z.date(),
  dateOfSend: z.date().optional()
})

export default MailSchema
