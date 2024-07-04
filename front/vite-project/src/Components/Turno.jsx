import styles from "../CSSComponent/Turno.module.css";
import {useSelector, useDispatch} from "react-redux";
import { cancelTurno } from "../Redux/Reducer";
import axios from "axios";

const Turno = ({id,dia,hora,doctor,estado})=>{


const dispatch= useDispatch();

const handleState = async ()=>{

    try{
      dispatch(cancelTurno(id))
      await axios.put(`http://localhost:3000/appointments/cancel/${id}` , { estado: "cancelado" })
      alert ("Turno cancelado con exito")
    } catch (error){
      alert (`Error al cancelar turno: ${error}`)
    }

  
};
 

const estadoEpalabra = estado === 'cancelado' ? styles.cancelado : styles.pendiente ;
const mostrarBoton =  estado ==='pendiente' ; 


return (

<div className={styles.turnocuerpo}>  
<p className={styles.linea}>{dia}</p>
<p className={styles.linea}>{hora}</p>
<p className={styles.linea}>{doctor}</p>
<p className={estadoEpalabra}>{estado}</p>
{mostrarBoton ?<button onClick={handleState}>Cancelar turno</button> : <button>Borrar</button> }
</div>
)

    
   
}

 
export default Turno;