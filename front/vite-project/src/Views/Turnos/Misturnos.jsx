import Misturnos from "../../Helpers/Misturnos.js";
import { useState } from "react";
import Turno from "../../Components/Turno.jsx";
import styles from "../../CSSComponent/Turno.module.css"

const MisTurnos = ()=>{

const [turnos, useTurnos] = useState(Misturnos);


return (
<div>
<h1>Aqui se registran sus turnos amigacho:</h1>
<br />
<br />
<div className={styles.contenedor}>
     {
        turnos.map((turno)=>{
            return (
                <Turno key={turno.id} id={turno.id} dia={turno.dia} hora= {turno.hora} estado={turno.estado}/>
            )
        })
  
    }
</div>
</div>
)
}

export default MisTurnos;