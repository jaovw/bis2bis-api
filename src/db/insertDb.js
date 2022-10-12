import { getUniversidade } from "../controllers/universidadeController.js";
import { logger } from "../utils/logger.js";
import model from "../models/universidade.js";
import { dbConnect } from "./connection.js"

const paises = [
    "suriname",
    "argentina",
    "brazil",
    "chile",
    "colombia",
    "paraguay",
    "peru",
    "uruguay"
]

async function insertDb() {

    let param = paises[0]
    let i = paises.length
    while (i > 0) {

        let resultadoAxios = await getUniversidade(param)

        try {
            await dbConnect()
            await model.create(resultadoAxios)
        } catch (e) {
            logger.error(e)
        }

        param = paises.pop()

        i--
    }

    logger.info('Insersao feita')
}

insertDb()