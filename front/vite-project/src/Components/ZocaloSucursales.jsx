import styles from "../CSSComponent/Zocalo.module.css"
import img1 from "../imagenes/sanatorio1.jpg"
import img2 from "../imagenes/sanatorio2.jpg"
import img3 from "../imagenes/sanatorio3.jpg"
import img4 from "../imagenes/sanatorio5.jpg"


const ZocaloSucursales = ()=>{
return (
<article >
          <ul className={styles.socaloSucursales} >
            <li className={styles.tarjetaSucursal}>4 de Enero 4885 <br /> Tel 0342-45288798 <img className={styles.imagenSanatorio} src={img1} alt="" /> </li>
            <li className={styles.tarjetaSucursal}>Av. Arturo Illia 789 <br /> Tel 0342-4896511 <img className={styles.imagenSanatorio} src={img2} alt="" /> </li>
            <li className={styles.tarjetaSucursal}>Espora 308 <br /> Tel 0342-4123697 <img className={styles.imagenSanatorio} src={img3} alt="" /> </li>
            <li className={styles.tarjetaSucursal}>Av. Gral Paz 3008<br /> Tel 0342-4984412 <img className={styles.imagenSanatorio} src={img4} alt="" /> </li>
          </ul>
 </article>

)
};

export default ZocaloSucursales
 