import axios from "axios";
import { logger } from "../utils/logger.js";

async function getUniversidade(param) {

    try {
        const { data, status } = await axios.get(
            `http://universities.hipolabs.com/search?country=${param}`,
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