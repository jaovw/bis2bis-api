import { Router } from "express"
import { logger } from "./utils/logger.js"
import { getListagem, getQueryListagem } from "./controllers/listagemController.js"

const router = Router()

router.get('/universities', getListagem)
router.get('/universities/:country?', getQueryListagem)

export default router