import { logger } from "../utils/logger.js"
import { dbConnect } from "../db/connection.js"
import model from "../models/universidade.js"
import stringUp from "../utils/stringUp.js"


export default async function(req, res) {

    const {
        name,
        web_pages,
        domains,
        state_province
    } = req.body
    
    //  PADRONIZANDO CAMPOS 
    const country = stringUp(req.body.country)
    const alpha_two_code = req.body.alpha_two_code.toUpperCase()

    const universidade = {
        country,
        alpha_two_code,
        name,
        web_pages,
        domains,
        state_province
    }

    try {
        
        await dbConnect()
        await model.create(universidade)

        return res.status(201).json({
            obj: name,
            message: 'Item cadastrado com sucesso !'
        })
    } catch (e) {
       logger.error(e)
       res.status(500).json({error: e}) 
    }
} 