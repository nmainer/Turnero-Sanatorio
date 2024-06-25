import axios from "axios";
import { useEffect, useState } from "react";
import Turno from "../../Components/Turno.jsx";
import styles from "../../CSSComponent/Turno.module.css"

const MisTurnos = ()=>{

const [turnos, useTurnos] = useState([]);

useEffect(()=>{
 axios.get("http://localhost:3000/appointments")
.then((response)=> useTurnos(response.data))
.catch((error)=> `ERROR : ${error}`)
}, [])


return (
<div>
<h1>Aqui se registran sus turnos amigacho:</h1>
<br />
<br />
<div className={styles.contenedor}>
     {
        turnos.map((turno)=>{
            return (
                <Turno key={turno.id}  dia={turno.dia} hora= {turno.hora} doctor={turno.doctor} estado={turno.estado}/>
            )
        })
  
    }
</div>
</div>
)
}

export default MisTurnos;