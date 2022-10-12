import axios from "axios";
import { logger } from "../utils/logger.js";

async function getUniversidade(req, res) {

    // REALIZANDO INCIALMENTE COM PAIS FIXO
    try {
        const { data, status } = await axios.get(
            `http://universities.hipolabs.com/search?country=uruguay`,
            {
                headers: {
                    Accept: 'aplication/json'
                }
            }
        )

        return data

    } catch (e) {
        logger.error(e)
    }
}

export { getUniversidade }