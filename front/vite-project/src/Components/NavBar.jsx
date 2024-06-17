import styles from "../CSSComponent/NavBar.module.css"


const NavBar = ()=>{

return (

       <div>
        <ul className= {styles.nav}>
            <li> <a className={styles.enlace} href="" >Registrarse</a></li>
            <li> <a className={styles.enlace} href="" >Mi Usuario</a></li>
            <li><a className={styles.enlace} href="">Nuestros Profesionales</a></li>
            <li><a className={styles.enlace} href="">Vision y Mision</a></li>
        </ul>
        </div>
)


}

export default NavBar ;