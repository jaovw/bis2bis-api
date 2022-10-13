import { logger } from "../utils/logger.js"
import { dbConnect } from "../db/connection.js"
import model from "../models/universidade.js"

export default async function (req, res) {

    const id = req.params.id

    try {

        await dbConnect()
        const obj = await model.findOne({ _id: id })

        if (!obj) {
            return res.status(500).json({ message: `Item ${id} nao encontrado.` })
        }

        await model.deleteOne({ _id: id })
        
        res.status(200).json({ message: `Item ${id} excluido.` })

    } catch (e) {
        logger.error(e)
        res.status(500).json({ message: 'Nao foi possivel excluir o registro ...' })
    }
}