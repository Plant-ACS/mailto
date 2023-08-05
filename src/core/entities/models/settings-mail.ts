import { z } from 'zod'
import AddressEmailSchema from '@core/entities/models/address-email.ts'

const SettingsMailSchema = z.object({
	hostname: z.string().url(),
	port: z.number().nonnegative().max(65535),
	tls: z.boolean(),
	auth: z.object({
		user: z.string(),
		pass: z.string(),
	}),
	address: AddressEmailSchema,
})

export default SettingsMailSchema

