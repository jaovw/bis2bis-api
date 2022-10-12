import { getUniversidade } from "../controllers/universidadeController.js";
import { logger } from "../utils/logger.js";
import model from "../models/universidade.js";
import { dbConnect } from "./connection.js"

const paises = [
    "argentina",
    "brazil",
    "chile",
    "colombia",
    "paraguai",
    "peru",
    "suriname",
    "uruguay"
]

async function insertDb(req, res) {
    // SPREAD NAO DEU CERTO, INDO APENAS PAISES[0]
    const resultadoAxios = await getUniversidade(...paises)

    try {
        await dbConnect()
        await model.create(resultadoAxios)
    } catch (e) {
        logger.error(e)
    }
    logger.info('Insersao feita')
    res.status(200).send('Dados inseridos')
}

export { insertDb }