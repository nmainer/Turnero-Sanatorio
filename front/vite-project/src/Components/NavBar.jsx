import styles from "../CSSComponent/NavBar.module.css";
import imagenInicio from "../imagenes/inicioSesion.png"

const NavBar = ()=>{

return (

       <nav>
        <ul className= {styles.nav}>
            <li><img className={styles.iconoSesion}  src={imagenInicio} alt="" /> </li>
            <li> <a className={styles.enlace} href="" >Registrarse</a></li>
            <li> <a className={styles.enlace} href="" >Mi Usuario</a></li>
            <li><a className={styles.enlace} href="">Nuestros Profesionales</a></li>
            <li><a className={styles.enlace} href="">Vision y Mision</a></li>
        </ul>
        </nav>
)


}

export default NavBar ;