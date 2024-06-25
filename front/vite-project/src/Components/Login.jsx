import styles from "../CSSComponent/Form.module.css";
import imagenSanatorio from "../imagenes/logoSanatorioSinfondo.png"


const Login = (prop)=>{
const {dataUser,handleChange,handleSubmit,dataError} = prop;

    return (

        <div className={styles.contenedor}>
        <form onSubmit={handleSubmit} action="" className={styles.formulario}>
        <div>
        <img src={imagenSanatorio} alt="logoSanatorio" className={styles.imagenLogo} />
        <h1>LOGIN</h1>
        </div>

         <section className={styles.alineado}>
         <div className={styles.linea}>
         <label htmlFor="">Usuario</label>
         <input  type="text" name='nameUser' placeholder='ej:nombre' value={dataUser.nameUser}  onChange={handleChange}/>
         { dataError.nameUser && <p style={{color:"red", fontSize:"1rem"}}>{dataError.nameUser}</p>}
        </div>

        <div className={styles.linea}>
         <label htmlFor="">Contraseña</label>
         <input type="password" name='password' placeholder='**********' value={dataUser.password}  onChange={handleChange}/>
         { dataError.password && <p style={{color:"red", fontSize:"1rem"}}>{dataError.password}</p>}
        </div>

        </section>
        

        <div style={{marginTop:"2rem"}}>
          <button type='submit' className={styles.boton}>Enviar</button>
        </div>

        </form>

        </div>
       
       
      )
}

export default Login;

