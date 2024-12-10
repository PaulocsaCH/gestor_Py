//? CONFIGURACION DEL SERVIDOR
import Express from "express"
import router from "./routes/indexRouter"

const server = Express()

server.use(Express.json())
server.use(router)

export default server