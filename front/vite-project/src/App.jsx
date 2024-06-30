import './App.css'

import User from './Views/User/User.jsx';
import Nouser from './Views/Nouser/Nouser.jsx';
import { useState } from 'react';
import { Route , Routes} from 'react-router-dom';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
      setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
};

  return(
   <div>
    
    {!isLoggedIn ? <Nouser Logeo={handleLogin} /> : <User onLogout={handleLogout} />}
   
   </div>
  )

}

export default App


  
  

