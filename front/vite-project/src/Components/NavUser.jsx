
import styles from "../CSSComponent/NavUser.module.css";
import imagenInicio from "../imagenes/sanatorios/inicioSesion.png";
import { Link } from "react-router-dom";


const NavUser = ({onLogout})=>{

return (

        <div className={styles.nav}>
        <img className={styles.iconoSesion}  src={imagenInicio} alt="" />
          <Link to={"/miperfil"} className={styles.enlace}>Mis datos</Link>
          <Link to={"/misturnos"} className={styles.enlace}>Mis Turnos</Link>
          <Link to={"/"} className={styles.enlace} onClick={onLogout}>Cerrar Sesion</Link>
        </div>   
)
}


export default NavUser;