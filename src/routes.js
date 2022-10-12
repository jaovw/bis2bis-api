import { Router } from "express"
import { logger } from "./utils/logger.js"
import { insertDb } from "./db/insertDb.js"

const router = Router()

router.get('/', insertDb)

export default router