//? INICIALIZA EL SERVIDOR

import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

server.listen(PORT,()=>{
    console.log(`Server listining on PORT ${PORT}`);
    
})

