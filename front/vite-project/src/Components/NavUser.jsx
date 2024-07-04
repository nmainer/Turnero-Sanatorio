
import styles from "../CSSComponent/NavUser.module.css";
import imagenInicio from "../imagenes/sanatorios/inicioSesion.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/Reducer";

const NavUser = ()=>{
const dispatch = useDispatch();

const handlelogout = ()=>{
dispatch(logoutUser())
};
  

return (

        <div className={styles.nav}>
        <img className={styles.iconoSesion}  src={imagenInicio} alt="" />
          <Link to={"/miperfil"}className={styles.enlace}>Mis datos</Link>
          <Link to={"/generarturno"}className={styles.enlace}>Generar Turno</Link>
          <Link to={"/misturnos"} className={styles.enlace}>Mis Turnos</Link>
          <Link to={"/"} className={styles.enlace} onClick={handlelogout} >Cerrar Sesion</Link>
        </div>   
)
}


export default NavUser;