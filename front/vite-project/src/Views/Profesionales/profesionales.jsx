import styles from "../../CSSComponent/Profesionales.module.css"
import img1 from "../../imagenes/medicos/medico8.jpg"
import img2 from "../../imagenes/medicos/medico2.jpg"
import img3 from "../../imagenes/medicos/medico3.jpg"
import img4 from "../../imagenes/medicos/medico7.jpg"
import img5 from "../../imagenes/medicos/medico1.jpg"

const Profesionales = ()=>{
    return(
        <div className={styles.contenedor}>

        <ul className= {styles.listado}>

        <li className={styles.linea} ><img className={styles.imagen} src={img1} alt="" /> <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores dolorem similique recusandae corporis doloremque incidunt delectus et nesciunt 
            hic! Maxime neque nulla corrupti? Vel harum dolores ex debitis eius a.</p></li>

        <li className={styles.linea}><img src={img2} className={styles.imagen} alt="" /> <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Asperiores dolorem similique recusandae corporis doloremque incidunt delectus et nesciunt 
        hic! Maxime neque nulla corrupti? Vel harum dolores ex debitis eius a.</p></li>

        <li className={styles.linea}><img src={img3} className={styles.imagen} alt="" /> <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Asperiores dolorem similique recusandae corporis doloremque incidunt delectus et nesciunt 
        hic! Maxime neque nulla corrupti? Vel harum dolores ex debitis eius a.</p></li>

        <li className={styles.linea}><img src={img4} className={styles.imagen} alt="" /> <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Asperiores dolorem similique recusandae corporis doloremque incidunt delectus et nesciunt 
        hic! Maxime neque nulla corrupti? Vel harum dolores ex debitis eius a.</p></li>

        <li className={styles.linea}><img src={img5} className={styles.imagen} alt="" /> <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Asperiores dolorem similique recusandae corporis doloremque incidunt delectus et nesciunt 
        hic! Maxime neque nulla corrupti? Vel harum dolores ex debitis eius a.</p></li>
        </ul>
        
        </div>
    )

}

export default Profesionales;