import app from "./server";
import PORT from "./Config/envs";
import "reflect-metadata";
import { AppDataSource } from "./Config/data-source";

AppDataSource.initialize()
.then((res)=> {console.log (`conexion establecida`)
app.listen (PORT, ()=>{
    console.log (`puerto: ${PORT} activo`)
})
});





