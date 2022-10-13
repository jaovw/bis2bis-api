import { logger } from "../utils/logger.js"
import { dbConnect } from "../db/connection.js"
import model from "../models/universidade.js"
import stringUp from "../utils/stringUp.js"

async function getListagem(req, res) {

    try {

        await dbConnect()
        const listagem = await model.find({}, {
            state_province: 0,
            __v: 0,
            domains: 0,
            web_pages: 0
        })
 
        return res.status(200).send(listagem)

    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e })
    }
}

export { getListagem }