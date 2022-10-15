import { logger } from './src/utils/logger.js'
import express from "express"
import router from './src/routes.js'

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(router)

const server = app.listen(port, () => logger.info(
    `
        API rodando na porta ${port}.
        Caso queira acessar o ambiente AWS >> http://ec2-18-213-245-167.compute-1.amazonaws.com:3000/universities
        Caso queira acessar o ambiente local ou Docker >> http://localhost:3000/universities
    `
))

export { app, server }