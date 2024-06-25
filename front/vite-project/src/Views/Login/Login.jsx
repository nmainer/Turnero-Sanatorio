import Login from "../../Components/Login";
import { useState } from "react";
import ValidarRegister from "../../Helpers/ValidarLogin";
import axios from "axios";

const LoginUser = ()=>{

 const [dataUser,setDataUser] = useState ({
    nameUser: "",
    password: ""
  })

  console.log (dataUser)

  const [dataError,setError] = useState ({
   nameUser: "",
   password: ""
 })

const handleChange = (event)=>{
const {name,value} = event.target;
setDataUser({
   ...dataUser,
   [name]:value
})
const data = ValidarRegister(dataUser);
setError(data);
}


const handleSubmit = async (event)=>{
event.preventDefault();
const {nameUser,password} = dataUser;

if(!nameUser || !password) {
alert ("Faltan datos");
return;
} 


    await axios.post("http://localhost:3000/users/login",dataUser )
    .then((response)=>{
      if (response.status === 200){
         alert ("Login exitoso! Bienvenido !")
      }
    })
    .catch((error)=> {
      if(error.response){
         alert (` ${error.response.data}`)
         console.log(error.response)
      } else {
         alert (`Error inesperado: ${error.message}`)
      }
    })
   }
            
return (
   <div>
    <Login dataUser={dataUser} handleChange={handleChange} handleSubmit={handleSubmit}  dataError={dataError}/>
   </div>    
  
)

}


export default LoginUser;



