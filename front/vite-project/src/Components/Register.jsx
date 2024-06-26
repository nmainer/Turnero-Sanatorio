import styles from "../CSSComponent/Register.module.css";
import imagenSanatorio from "../imagenes/logoSanatorioSinfondo.png"


const Register = (prop)=>{
const {registerUser ,handleChange , handleSubmit , error}=prop;

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
         <input  type="text" name='nombre' autoComplete="off"  value={registerUser.nombre} className={styles.input} onChange={handleChange}/>
         {error.nombre && <p style={{color:"red", fontSize:"1rem"}}>{error.nombre}</p>}
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Apellido</label>
        <input   type="text" name='apellido' autoComplete="off"  value={registerUser.apellido} className={styles.input} onChange={handleChange}/>
        {error.apellido && <p style={{color:"red", fontSize:"1rem"}}>{error.apellido}</p>}
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Direccion</label>
         <input   type="text" name='direccion' autoComplete="off" value={registerUser.direccion} className={styles.input} onChange={handleChange}/>
         {error.direccion && <p style={{color:"red", fontSize:"1rem"}}>{error.direccion}</p>}
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Telefono</label>
         <input type="tel" name='telefono' autoComplete="off" value={registerUser.telefono} className={styles.input} onChange={handleChange}/>
         {error.telefono && <p style={{color:"red", fontSize:"1rem"}}>{error.telefono}</p>}
        </div>
        </section>
        

        <section className={styles.subseccion2}>
        <div className={styles.linea}>
         <label htmlFor="">E-mail</label>
         <input type="text" name='email' autoComplete="off" value={registerUser.email}  onChange={handleChange}/>
         {error.email && <p style={{color:"red", fontSize:"1rem"}}>{error.email}</p>}
        </div>
        <div className={styles.linea}>
         <label htmlFor="">DNI</label>
         <input  type="text" name='dni' autoComplete="off"  value={registerUser.dni}  onChange={handleChange}/>
         {error.dni && <p style={{color:"red", fontSize:"1rem"}}>{error.dni}</p>}
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Foto Perfil</label>
         <input   type="text" name='urlFoto' autoComplete="off" value={registerUser.urlFoto}  onChange={handleChange}/>
         {error.urlFoto && <p style={{color:"red", fontSize:"1rem"}}>{error.urlFoto}</p>}
        </div>
        </section>
        </section>
        <section className={styles.seccion2}>
        <div className={styles.linea}>
         <label htmlFor="">Nombre de Usuario</label>
         <input   type="text" name='nameUser' autoComplete="off" value={registerUser.nameUser} onChange={handleChange}/>
         {error.nameUser && <p style={{color:"red", fontSize:"1rem"}}>{error.nameUser}</p>}
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Contraseña</label>
         <input   type="password" name='password' autoComplete="off"  value={registerUser.password}  onChange={handleChange}/>
         {error.password && <p style={{color:"red", fontSize:"1rem"}}>{error.password}</p>}
        </div>
        <div className={styles.linea}>
         <label htmlFor="">Repita Contraseña</label>
         <input  type="password" name='password2' autoComplete="off" value={registerUser.password2} onChange={handleChange}/>
         {error.password2 && <p style={{color:"red", fontSize:"1rem"}}>{error.password2} 😒</p>}
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

