import { Router } from "express"
import { logger } from "./utils/logger.js"
import { getListagem, getQueryListagem, getIdListagem } from "./controllers/listagemController.js"
import cadastroController from "./controllers/cadastroController.js"
import atualizacaoController from "./controllers/atualizacaoController.js"
import exclusaoController from "./controllers/exclusaoController.js"

const router = Router()

router.get('/universities/:page?', getListagem)

router.get('/universities/:id', getIdListagem)

router.get('/universities/country/:country?',getQueryListagem)

router.post('/universities', cadastroController)

router.patch('/universities/:id', atualizacaoController)

router.delete('/universities/:id', exclusaoController)

export default router