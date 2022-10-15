import { logger } from "../utils/logger.js"
import { dbConnect } from "../db/connection.js"
import model from "../models/universidade.js"
import stringUp from "../utils/stringUp.js"

async function getListagem(req, res) {
    
    const param = req.query['page']

    let limite
    param ? limite = 2000: limite = 20
    
    try {

        await dbConnect()
        const listagem = await model.find({}, {
            state_province: 0,
            __v: 0,
            domains: 0,
            web_pages: 0
        }).limit(limite).skip(Math.floor(Math.random() * 20))
 
        return res.status(200).send(listagem)

    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e })
    }
}

async function getQueryListagem(req, res) {

    let param = req.query['country']

    if(!param) {
        return res.status(500).json({messa: `Parametros incorretos para essa rota`})
    }

    param = stringUp(param)
    
    const page = (req.query['page'])

    let limite
    page ? limite = 2000: limite = 20

    try {

        await dbConnect()
        const listagem = await model.find({
            country: param
        },{
            state_province: 0,
            __v: 0,
            domains: 0,
            web_pages: 0
        }).limit(limite).skip(Math.floor(Math.random() * 20))

        return res.status(200).send(listagem)
    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e })
    }
    
}

async function getIdListagem(req,res) {
    
    const id = req.params.id

    try {

        await dbConnect()
        const listagem = await model.findOne({_id: id})
 
        return res.status(200).send(listagem)

    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e })
    }
}

export { getListagem, getQueryListagem, getIdListagem }