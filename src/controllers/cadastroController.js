import { logger } from "../utils/logger.js"
import { dbConnect } from "../db/connection.js"
import model from "../models/universidade.js"
import stringUp from "../utils/stringUp.js"


export default async function (req, res) {

    let {
        name,
        country,
        alpha_two_code,
        web_pages,
        domains,
        state_province
    } = req.body

    //  VALIDACOES
    if (country) {
        stringUp(country)
    } else {
        return res.status(500).json({ message: `Utilize o body corretamente.` })
    }

    if (alpha_two_code) {
        alpha_two_code.toUpperCase()
    } else {
        return res.status(500).json({ message: `Utilize o body corretamente.` })
    }

    if (!name || !country || !alpha_two_code) {
        res.set('Content-Type', 'text/html')
        return res.status(500).json({ message: `Utilize o body corretamente.` })
    }
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

        const cad = await model.findOne({
            name: universidade.name,
            country: universidade.country,
            alpha_two_code: universidade.alpha_two_code
        })

        if (cad) {
            return res.status(500).json({ message: `Item ja existe.` })
        }
        
        await model.create(universidade)

        return res.status(201).json({
            obj: name,
            message: 'Item cadastrado com sucesso !'
        })


    } catch (e) {
        logger.error(e)
        res.status(500).json({ error: e })
    }
} 