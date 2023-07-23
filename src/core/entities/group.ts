import { z } from "zod"
import GroupSchema from "@core/entities/models/group.ts"

export type Group = z.infer<typeof GroupSchema>