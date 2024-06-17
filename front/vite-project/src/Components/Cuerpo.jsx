import imagenLogo from "../imagenes/logoSanatorioSinfondo.png"
import styles from "../CSSComponent/Cuerpo.module.css";


const Cuerpo = ()=>{

return (
   <section>
        <div className={styles.centro}>
        <article className={styles.cuadroHorarios}>
        <p>Nuestros horarios: <br /> <br /> Lunes a Sabados 9:00 a 16:00hs</p>
        </article>
        <article>
        <img className={styles.imagenLogo} src={imagenLogo} alt="" />
        </article>   
     </div> 
   </section>
    
    
)

}

export default Cuerpo;