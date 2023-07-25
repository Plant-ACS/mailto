//@deno-types="npm:@types/express@4"
import { Router } from "$express"
import groupRoutes from "./group.ts"
import mailRoutes from "./mail.ts"

const router = Router()

router.use(["mail", "mails"], mailRoutes)
router.use(["group", "groups"], groupRoutes)

export default router
