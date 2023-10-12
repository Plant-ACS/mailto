//@deno-types="npm:@types/express@4"
import { Router } from "$express"
import mailRoutes from "./mail.ts"

const router = Router()

router.use("/mail", mailRoutes)

export default router
