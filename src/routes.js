import { Router } from "express"
import { logger } from "./utils/logger.js"
import { getListagem, getQueryListagem, getIdListagem } from "./controllers/listagemController.js"

const router = Router()

router.get('/universities', getListagem)

router.get('/universities/:id', getIdListagem)

router.get('/universities/country/:country?',getQueryListagem)

export default router