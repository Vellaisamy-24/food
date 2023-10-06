
import './App.css';
import Home from './pages/Home';
import Parotta from './pages/Parotta';
import Dhosai from './pages/Dhosai';
import Briyani from './pages/Briyani';
import Idiyappam from './pages/Idiyappam';
import Idly from './pages/Idly';
import Pongal from './pages/Pongal';
import Vadai from './pages/Vadai';
import Price from './Price';
import Login from './Login';
import Order from './Order';
import {useState,createContext} from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


export const LoginContext=createContext(null)
function App() {
  const [userName,setUserName]=useState("")
  const [userMail,setUserMail]=useState("")
  const [userPassword,setUserPassword]=useState("")
  return (
    <>
        <LoginContext.Provider value={{userName,setUserName,userMail,setUserMail,userPassword,setUserPassword}}>
    <Router>
      <Routes>
    
        <Route path="/" element={<Login />}/>

      <Route path="/home" element={<Home />}/>
      <Route path="/parotta" element={<Parotta />} />
      <Route path="/dhosai" element={<Dhosai />} />
      <Route path="/briyani" element={<Briyani />} />
      <Route path="/idly" element={<Idly />} />
      <Route path="/vadai" element={<Vadai />} />
      <Route path="/idiyappam" element={<Idiyappam />} />
      <Route path="/pongal" element={<Pongal />} />
      <Route path="/price/:cost/:name" element={<Price />} />
      <Route path="/placeOrder/:name/:cost/:quantity/:totalprice" element={<Order />}/>
  
      </Routes>
    </Router>
    </LoginContext.Provider>

    </>
  );
}

export default App;
