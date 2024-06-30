
import { Route,Routes } from "react-router-dom";
import NavUser from "../../Components/NavUser.jsx";
import Homeuser from "../Home/Homeuser.jsx";
import Miperfil from "../Perfil/Miperfil.jsx";
import MisTurnos from "../Turnos/Misturnos.jsx";
import { useLocation } from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const User = ({onLogout})=>{

   const location = useLocation();

   return (

    <div>
    <NavUser onLogout={onLogout}/>
    <TransitionGroup>
    <CSSTransition
    key={location.key}
    timeout={30}
    classNames="fade"
    >
    <Routes>
    <Route path={"/homeuser"} element={<Homeuser/>}/>
    <Route path={"/miperfil"} element={<Miperfil/>}/>
    <Route path={"/misturnos"} element={<MisTurnos/>}/>
    </Routes>

    </CSSTransition>
    </TransitionGroup>

    </div> 
   )
}

export default User;