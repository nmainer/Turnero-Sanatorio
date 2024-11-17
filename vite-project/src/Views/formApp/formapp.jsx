import styles from "../../CSSComponent/formApp.module.css";

const GenerarTurno = (prop)=>{

const {handleInput, dataTurno, handleApp,dataAppError}=prop;

return (
    <div className={styles.cuerpo}>
        <h3>Completa los siguientes datos y luego aceptar</h3>
        <div className={styles.contenedor}>
        <form action="" className={styles.form} onSubmit={handleApp}>
            <div className={styles.linea}>
            <label htmlFor="" className={styles.label}>Dia</label>
            <input type="text" name="dia" className={styles.input}  value={dataTurno.dia} onChange={handleInput}/>
            {dataAppError.dia && <p style={{color:"red", fontSize:"1rem"}}>{dataAppError.dia}</p>}
            </div>
            <div className={styles.linea}>
            <label htmlFor="" className={styles.label}>hora</label>
            <input type="text" name="hora" className={styles.input}value={dataTurno.hora} onChange={handleInput}/>
            {dataAppError.hora && <p style={{color:"red", fontSize:"1rem"}}>{dataAppError.hora}</p>}
            </div>
            <div className={styles.linea}>
            <label htmlFor="" className={styles.label}>Doctor</label>
            <input type="text" name="doctor" className={styles.input} value={dataTurno.doctor}  onChange={handleInput}/>
            {dataAppError.doctor && <p style={{color:"red", fontSize:"1rem"}}>{dataAppError.doctor}</p>}
            </div>
            <div className={styles.button}>
            <button type="submit" className={styles.boton}>Aceptar</button>
            </div>
             
        </form>
        </div>
        
    </div>
)
}


export default GenerarTurno;

/*"dia": "2024-06-55",
 "hora": "00:00hs",
 "doctor":"Gonzalo",
 "usuarioId":1*/ 