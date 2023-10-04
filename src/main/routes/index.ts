//@deno-types="npm:@types/express@4"
import { Router } from "$express"
import groupRoutes from "./group.ts"
import mailRoutes from "./mail.ts"

const router = Router()

router.use("/mail", mailRoutes)
router.use("/group", groupRoutes)

export default router
