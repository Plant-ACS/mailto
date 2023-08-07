import { z } from "zod"
import FileSchema from "@core/entities/models/file.ts"

const MailModelSchema = z.object({
  subject: z.string().min(5).max(25),
  body: z.string(),
  isMD: z.boolean(),
  files: z.array(FileSchema).optional(),
})

export default MailModelSchema
