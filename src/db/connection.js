import mongoose from "mongoose";
import { logger } from '../utils/logger.js'
import * as dotenv from 'dotenv'
dotenv.config()
async function dbConnect() {

    try {
        await mongoose.connect(
            `mongodb+srv://admin:${process.env.DB_PASSWORD}@bis2bis.lhjrcau.mongodb.net/?retryWrites=true&w=majority`
        )
        logger.info('Sucesso na conexao')
    } catch (e) {
        logger.error(e)
    }
}

export { dbConnect }