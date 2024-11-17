import Login from "../../Components/Login";
import { useState } from "react";
import ValidarRegister from "../../Helpers/ValidarLogin";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { loginUser } from "../../Redux/Reducer";


const LoginUser = ()=>{


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
const dispatch = useDispatch();


const handleSubmit = async (event)=>{
event.preventDefault();
const {nameUser,password} = dataUser;


if(!nameUser || !password) {
alert ("Faltan datos");
return;
} 

try{
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, dataUser );
  const idUser = response.data.user
     if (response.status === 200){
        alert ("Login exitoso! Bienvenido !")
        dispatch(loginUser({...dataUser, id:idUser}))
        navigate("/bienvenido")

        setDataUser({
         nameUser: "",
         password: ""
       });
      
     }
     
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



