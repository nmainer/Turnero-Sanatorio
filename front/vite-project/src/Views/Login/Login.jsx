import Login from "../../Components/Login";
import { useState } from "react";
import ValidarRegister from "../../Helpers/ValidarLogin";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const LoginUser = ({Logeo})=>{


 const [dataUser,setDataUser] = useState ({
    nameUser: "",
    password: ""
  })


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

const navigate = useNavigate();

const handleSubmit = async (event)=>{
event.preventDefault();
const {nameUser,password} = dataUser;


if(!nameUser || !password) {
alert ("Faltan datos");
return;
} 

try{
  const response = await axios.post("http://localhost:3000/users/login", dataUser );
  
     if (response.status === 200){
        alert ("Login exitoso! Bienvenido !")
        Logeo();
        navigate("/homeuser");
        return ()=>{
          dataUser === "";
        }
     }
     console.log(dataUser);
   } catch (error) {
      if(error.response){
         alert (` ${error.response.data}`)
      } else {
         alert (`Error inesperado: ${error.message}`)
      }
    }

    

}
              
return (
   <div>
    <Login dataUser={dataUser} handleChange={handleChange} handleSubmit={handleSubmit}  dataError={dataError}/>
   </div>    
  
)
}




export default LoginUser;



