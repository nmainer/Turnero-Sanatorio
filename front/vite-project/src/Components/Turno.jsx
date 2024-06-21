import styles from "../CSSComponent/Turno.module.css"

const Turno = (props)=>{
   const {dia,hora,doctor,estado} = props;
  

return (

<div className={styles.turnocuerpo}>  
<h1 className={styles.linea}>{dia}</h1>
<h1 className={styles.linea}>{hora}</h1>
<h1 className={styles.linea}>{doctor}</h1>
<h1 className={`${estado === 'cancelado' ? styles.cancelado : styles.pendiente}`}>{estado}</h1>
<button className={styles.linea}>Cancelar turno</button>
</div>
)

    
   
}

export default Turno;