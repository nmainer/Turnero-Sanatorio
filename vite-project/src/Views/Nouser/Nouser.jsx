
import Profesionales from "../../Views/Profesionales/profesionales.jsx";
import NavBar from "../../Components/NavBar.jsx";
import Home from "../../Views/Home/Home.jsx";
import LoginUser from "../../Views/Login/Login.jsx"
import RegisterUser from "../../Views/Register/register.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { Route,Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Visionymision from "../../Views/visionymision/visionymsion.jsx";

const Nouser =({Logeo})=>{
    const location = useLocation();
    return (

    <div>
      <NavBar/>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={30}
          classNames="fade"
        >
      <Routes location={location}>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<LoginUser Logeo={Logeo}/>}/>
      <Route path='/register' element={<RegisterUser/>}/>
      <Route path='/profesionales' element={<Profesionales/>}/>
      <Route path='/visionymision' element={<Visionymision/>}/>
      </Routes>

      </CSSTransition>
      </TransitionGroup>
    </div>
      
    )
}

export default Nouser;