import styles from "../../CSSComponent/Bienvenida.module.css"

const Homeuser = ()=>{
return (
    <div className={styles.cuerpo}>
     <section className={styles.contenedor}>
        <h1>Bienvenido a su plataforma</h1>
        <h2> Aqui podra :</h2>
        <ul>
            <li><h3>Consultar sus datos personales</h3></li>
            <li><h3>Consultar y/o modificar sus turnos</h3></li>
        </ul>
        <h4>Solo dirijase a la barra navegadora superior</h4>
        <br />
        <br />
        <h4>Gracias por elegirnos!</h4>
    </section>

    </div>
    
)

}

export default Homeuser;