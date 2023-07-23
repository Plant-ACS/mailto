import { z } from "zod"

const AddressEmailSchema = z.string()
export const emailRegex = /^[a-zA-Z0-9-.+]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


AddressEmailSchema.regex(emailRegex, "type of email incorrect")
AddressEmailSchema.or(z.string().regex(new RegExp(`\b[A-Za-z]+\s*<${emailRegex}>\b`)))
export default AddressEmailSchema