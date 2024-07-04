
import { Route,Routes } from "react-router-dom";
import NavUser from "../../Components/NavUser.jsx";
import Homeuser from "../Home/Homeuser.jsx";
import Miperfil from "../Perfil/Miperfil.jsx";
import MisTurnos from "../Turnos/Misturnos.jsx"; 
import NewApp from "../Turnos/newApp.jsx";
import { useLocation } from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const User = ()=>{

   const location = useLocation();

   return (

    <div>
    <NavUser/>
    <TransitionGroup>
    <CSSTransition
    key={location.key}
    timeout={30}
    classNames="fade"
    >
    
    <Routes>
    <Route path={"/bienvenido"} element = {<Homeuser/>}/>
    <Route path={"/miperfil"} element={<Miperfil/>}/>
    <Route path={"/generarturno"} element={<NewApp/>}/>
    <Route path={"/misturnos"} element={<MisTurnos/>}/>
    </Routes>

    </CSSTransition>
    </TransitionGroup>

    </div> 
   )
}

export default User;