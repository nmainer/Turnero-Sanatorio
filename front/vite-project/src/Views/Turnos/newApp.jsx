import axios from "axios"
import { useState } from "react"
import GenerarTurno from "../../Views/formApp/formapp.jsx";
import ValidarTurno from "../../Helpers/validarTurno";
import { useDispatch , useSelector } from "react-redux";
import { addTurno } from "../../Redux/Reducer.js";



const NewApp = ()=>{

const userId = useSelector((state)=>state.user.id)


const dispatch = useDispatch();

const [dataTurno , setDataturno] = useState({
  dia : "",
  hora: "",
  doctor :"",
  usuarioId:userId
});

const [dataAppError,setDataAppError]= useState({
    dia : "",
    hora: "",
    doctor :"",
})



const handleInput = (event)=>{
    const {name,value} = event.target;
    setDataturno({
       ...dataTurno,
       [name]:value
    })
    const data = ValidarTurno(dataTurno);
    setDataAppError(data);
    }



    const handleApp = async (event)=>{
    event.preventDefault();

    try{
        const response = await axios.post ("http://localhost:3000/appointments/App", dataTurno)
        if (response.status === 201){
         alert ("Turno generado")

         dispatch(addTurno(dataTurno));

         setDataturno({
             dia : "",
             hora: "",
             doctor :"",
             usuarioId: ""
         })
        }
        
    }  catch (error){
      alert (`Error al generar turno : ${error}`)
    }
}
  
      return (
          <GenerarTurno handleInput={handleInput} dataTurno={dataTurno} handleApp={handleApp} dataAppError={dataAppError}/>
      )


}

export default NewApp;



  
