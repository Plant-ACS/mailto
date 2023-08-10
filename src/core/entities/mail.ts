import { z } from "zod"
import { Types } from "mongoose"
import MailSchema from "@core/entities/models/mail.ts"
import AddressEmailSchema from "@core/entities/models/address-email.ts"
import SettingMailSchema from "@core/entities/models/settings-mail.ts"
import MailModelSchema from "@core/entities/models/mail-model.ts"

export type Mail = z.infer<typeof MailSchema>

export type MailModel = z.infer<typeof MailModelSchema>

export type SettingMail = z.infer<typeof SettingMailSchema>

export type AddressEmail = z.infer<typeof AddressEmailSchema>
