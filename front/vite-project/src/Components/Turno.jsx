import styles from "../CSSComponent/Turno.module.css"

const Turno = (props)=>{
   const {dia,hora,doctor,estado} = props;

  const estadoEpalabra = estado === 'cancelado' ? styles.cancelado : styles.pendiente ;
  const mostrarBoton =  estado ==='pendiente' ; 

return (

<div className={styles.turnocuerpo}>  
<h1 className={styles.linea}>{dia}</h1>
<h1 className={styles.linea}>{hora}</h1>
<h1 className={styles.linea}>{doctor}</h1>
<h1 className={estadoEpalabra}>{estado}</h1>
{mostrarBoton && <button>Cancelar turno</button>}

</div>
)

    
   
}

export default Turno;