import app from "./server";
import PORT from "./Config/envs";


app.listen(PORT, ()=>{
    console.log (`puerto: ${PORT} activo`)
});

