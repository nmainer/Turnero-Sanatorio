
import { useState } from "react"
import ValidarRegister from "../../Helpers/ValidarRegister"
import Register from "../../Components/Register"
import axios from "axios"
import Miperfil from "../Perfil/Miperfil"

const RegisterUser = ()=>{

const [registerUser,setRegisterUser] = useState({

     nombre:"",
     apellido:"",
     direccion:"",
     telefono:"",
     email: "",
     dni: "",
     urlFoto:"",
     nameUser: "",
     password:"",
     password2:""
})

const [error, setError]= useState({});


const handleChange = (event)=>{
const {name,value} = event.target;
setRegisterUser({
    ...registerUser,
    [name]:value
})
const data = ValidarRegister({
    ...registerUser,
    [name]:value
})
setError(data)
}


const handleSubmit = async (event)=>{
 event.preventDefault();
for (let elemento in registerUser){
    if(registerUser[elemento] ===""){
        alert ("Debes completar todos los campos");
        return;
    }
}


await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, registerUser) 
.then((response)=>{
    if(response.status === 200){
        alert ("Registro exitoso, dirijase a Login");
        setRegisterUser({
            nombre:"",
            apellido:"",
            direccion:"",
            telefono:"",
            email: "",
            dni: "",
            urlFoto:"",
            nameUser: "",
            password:"",
            password2:""
       })

    }
})
.catch((error)=> {
    if(error.response){
       alert (` ${error.response.data}`)
    } else {
       alert (`Error inesperado: ${error.message}`)
    }
  })


}


return(
<div>
    <Register registerUser={registerUser}  handleChange={handleChange} handleSubmit={handleSubmit} error={error}/>
  
</div>
    )
}

export default RegisterUser;