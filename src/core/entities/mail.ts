import { z } from "zod"
import MailSchema from "@core/entities/models/mail.ts"
import AddressEmailSchema from "@core/entities/models/address-email.ts"
import MailModelSchema from "@core/entities/models/mail-model.ts"

export type Mail = z.infer<typeof MailSchema>

export type MailModel = z.infer<typeof MailModelSchema>

export type AddressEmail = z.infer<typeof AddressEmailSchema>
