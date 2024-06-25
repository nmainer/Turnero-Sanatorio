import styles from "../CSSComponent/Register.module.css";
import imagenSanatorio from "../imagenes/logoSanatorioSinfondo.png"


const Register = (prop)=>{
const {registerUser ,handleChange , handleSubmit}=prop;

    return(

      <div className={styles.fondo}>

        <form onSubmit={handleSubmit} action="" className={styles.formulario}>
        <div className={styles.loginFoto}>
        <img src={imagenSanatorio} alt="logoSanatorio" className={styles.imagenLogo} />
        <h1>REGISTRO</h1>
        </div>

        <section className={styles.seccion1}>

        <section className={styles.subseccion1}>
        <div className={styles.linea}>
         <label htmlFor="">Nombre</label>
         <input  type="text" name='nombre'  value={registerUser.nombre} className={styles.input} onChange={handleChange}/>
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Apellido</label>
         <input   type="text" name='apellido'  value={registerUser.apellido} className={styles.input} onChange={handleChange}/>
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Direccion</label>
         <input   type="text" name='direccion' value={registerUser.direccion} className={styles.input} onChange={handleChange}/>
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Telefono</label>
         <input type="tel" name='telefono' value={registerUser.telefono} className={styles.input} onChange={handleChange}/>
        </div>
        </section>


        <section className={styles.subseccion2}>
        <div className={styles.linea}>
         <label htmlFor="">E-mail</label>
         <input type="text" name='email' value={registerUser.email}  onChange={handleChange}/>
        </div>
        <div className={styles.linea}>
         <label htmlFor="">DNI</label>
         <input  type="text" name='dni'  value={registerUser.dni}  onChange={handleChange}/>
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Foto Perfil</label>
         <input   type="file" name='UrlFoto' value={registerUser.UrlFoto}  onChange={handleChange}/>
        </div>
        </section>
        </section>

        <section className={styles.seccion2}>
        <div className={styles.linea}>
         <label htmlFor="">Nombre de Usuario</label>
         <input   type="text" name='nombreUsuario' autoComplete="off" value={registerUser.nombreUsuario} onChange={handleChange}/>
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Contraseña</label>
         <input   type="password" name='nombreContraseña' autoComplete="off"  value={registerUser.nombreContraseña}  onChange={handleChange}/>
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Repita Contraseña</label>
         <input  type="password" name='repetirContraseña' autoComplete="off" value={registerUser.repetirContraseña} onChange={handleChange}/>
        </div>
        </section>
        <div className={styles.zocalo}>
          <button type='submit' className={styles.boton}>Enviar</button>
        </div>
        </form>
      </div>
        

        
        
    )
}

export default Register;

