import './App.css'

import User from './Views/User/User.jsx';
import Nouser from './Views/Nouser/Nouser.jsx';
import { useState } from 'react';
import { Route , Routes} from 'react-router-dom';
import { useSelector } from 'react-redux';



function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)

  return(
   <div>
    
    {!isLoggedIn ? <Nouser/> : <User/>}
   
   </div>
  )

}

export default App


  
  

