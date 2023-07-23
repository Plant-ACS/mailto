import { z } from "zod"
import MailSchema from "@core/entities/models/mail.ts"
import AddressEmailSchema from "@core/entities/models/address-email.ts"

export type Mail = z.infer<typeof MailSchema>

export type AddressEmail = z.infer<typeof AddressEmailSchema>