import './App.css';
import React, { useState, useRef } from "react";


import { Auth } from "./components/Auth";
import { Chat } from "./components/Chat"

import Cookies from 'universal-cookie';
const cookies = new Cookies()


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  
  if (!isAuth){
    return (
      <div>
        {/* console.log("signing in") */}
        <Auth />
      </div>
    );   
  } 

  return(
    <div>
      <p> Ramayana Chat Room</p>
      <Chat />
    </div>
  )
  
}

export default App