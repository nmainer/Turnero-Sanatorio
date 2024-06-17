import NavBar from "../Components/NavBar";
import Cuerpo from "../Components/Cuerpo";
import styles from "../CSSComponent/Home.module.css"
import ZocaloSucursales from "../Components/ZocaloSucursales";

const Home = ()=>{
    return (

<div className={styles.cuerpo}>
<div className={styles.fondo}>
<NavBar/>
<Cuerpo/>
<ZocaloSucursales/>
<footer>Todos los derechos bien derechos  <br />hecho por NiKiN</footer> 
</div>
</div>        
    )
}

export default Home;