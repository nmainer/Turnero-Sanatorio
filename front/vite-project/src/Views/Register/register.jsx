import Register from "../../Components/Register"
import { useState } from "react"

const RegisterUser = ()=>{

const [registerUser,setRegisterUser] = useState({
    nombre:"",
    apellido:"",
    direccion:"",
    telefono:"",
    email:"",
    dni:"",
    UrlFoto: "",
    nombreUsuario:"",
    nombreContraseña:"",
    repetirContraseña:""
})

const handleChange = (event)=>{
const {name,value} = event.target;
setRegisterUser({
    ...registerUser,
    [name]:value
})
}

const handleSubmit = (event)=>{
    event.preventDefault();
alert (`nombre: ${registerUser.nombre} apellido: ${registerUser.apellido} direccion: ${registerUser.direccion}
    telefono: ${registerUser.telefono} email: ${registerUser.email} DNI: ${registerUser.dni}
    Urlfoto: ${registerUser.UrlFoto} nombreUsuario: ${registerUser.nombreUsuario} nombreContraseña: ${registerUser.nombreContraseña} 
    repetirContraseña: ${registerUser.repetirContraseña}`)

}


 return(
<div>
    <Register registerUser={registerUser} handleChange={handleChange} handleSubmit={handleSubmit}/>
</div>
    )
}

export default RegisterUser;