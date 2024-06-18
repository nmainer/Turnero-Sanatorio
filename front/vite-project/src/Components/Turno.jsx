import styles from "../CSSComponent/Turno.module.css"

const Turno = (props)=>{
   const {id,dia,hora,estado} = props;
  

return (

<div className={styles.turnocuerpo}>
<h1>ID turno:{id}</h1>  
<h1>dia:{dia}</h1>
<h1>hora:{hora}</h1>
<h1>estado:{estado}</h1>
</div>
)

    
   
}

export default Turno;