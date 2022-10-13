import { logger } from "../utils/logger.js"
import { dbConnect } from "../db/connection.js"
import model from "../models/universidade.js"

export default async function (req, res) {

    const id = req.params.id
    const {
        name,
        web_pages,
        domains,
    } = req.body
    

    const universidade = {
        name,
        web_pages,
        domains,
    }

    try {
        
        await dbConnect()
        await model.updateOne({_id: id}, universidade)
        
        res.status(200).json({
            obj: id,
            message: 'Item atualizado com sucesso'
        })
    } catch (e) {
        logger.error(e)
        res.status(500).json({message: 'Erro no patch, verifique o body ...'})
    }
}