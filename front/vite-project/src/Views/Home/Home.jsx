
import Cuerpo from "../../Components/Cuerpo";
import styles from "../../CSSComponent/Home.module.css"
import ZocaloSucursales from "../../Components/ZocaloSucursales";

const Home = ()=>{
    return (

<div className={styles.cuerpo}>
<div className={styles.fondo}>
<Cuerpo/>
<ZocaloSucursales/>
<footer>Todos los derechos bien derechos &copy; <br />hecho por NiKiN</footer> 
</div>
</div>        
    )
}

export default Home;