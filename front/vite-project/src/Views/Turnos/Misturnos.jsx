import axios from "axios";
import { useEffect, useState } from "react";
import Turno from "../../Components/Turno.jsx";
import styles from "../../CSSComponent/Turno.module.css"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTurnos } from "../../Redux/Reducer.js";

const MisTurnos = ()=>{
const turnos = useSelector((state)=>state.turnos)
const userId = useSelector((state)=>state.user.id)


const dispatch = useDispatch();

useEffect(()=>{
   
const elemento = async ()=>{
try{

    const response = await axios.get("http://localhost:3000/appointments")

    const allAppoint = response.data;
    
    const appUser = allAppoint.filter((appoint)=>appoint.usuarioId === userId)
    
    dispatch(setTurnos(appUser))

}catch (error) {
`ERROR : ${error}`
} 
}

elemento();

}, [])





return (
<div>
<h1>Aqui se registran sus turnos:</h1>
<br />
<br />
<div className={styles.contenedor}>
     {
        turnos.map((turno)=>{
            return (
            
               <Turno key={turno.id} {...turno} />
            )
        })
  
    }
</div>
</div>
)
}

export default MisTurnos;