import styles from "../CSSComponent/NavBar.module.css";
import imagenInicio from "../imagenes/sanatorios/inicioSesion.png";
import { Link } from "react-router-dom";

const NavBar = ()=>{

return (

        <div className={styles.nav}>
        <img className={styles.iconoSesion}  src={imagenInicio} alt="" />
          <Link to={"/"} className={styles.enlace} >Inicio</Link>
          <Link to={"/register"} className={styles.enlace}>Registrarse</Link>
          <Link to={"/login"} className={styles.enlace}>Mi Usuario</Link>
          <Link to={"/profesionales"} className={styles.enlace}>Nuestros Profesionales</Link>
          <Link to={"/visionymision"} className={styles.enlace}>Vision y Mision</Link>
        </div>   
)
}


export default NavBar;

{/*<li><img className={styles.iconoSesion}  src={imagenInicio} alt="" /> </li>
            <li> <a className={styles.enlace} href="/" >Inicio</a></li>
            <li> <a className={styles.enlace} href="/register" >Registrarse</a></li>
            <li> <a className={styles.enlace} href="/login" >Mi Usuario</a></li>
            <li><a className={styles.enlace} href="">Nuestros Profesionales</a></li>
            <li><a className={styles.enlace} href="">Vision y Mision</a></li>*/}