//? CONFIGURACION DEL SERVIDOR
import Express from "express"
import router from "./routes/indexRouter"
import Morgan from "morgan"

const server = Express()

server.use(Morgan("dev"))
server.use(Express.json())
server.use(router)

export default server