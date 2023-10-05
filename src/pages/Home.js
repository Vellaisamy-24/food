import React from 'react'
import {Link} from "react-router-dom"
import { LoginContext } from '../App'
import {useState,useContext} from 'react'


const Home = () => {
  const {userName,userMail,userPassword}=useContext(LoginContext)
  const [display,setDisplay]=useState(false)
  function handleDisplay()
  {
    setDisplay(!display)
  }
  return (
    <>

 <div className=''>
   
  <div className=' sm1:text-[40px] font-exquisite font-bold shadow-md border border-black border-[2px]  fixed  text-black w-screen top-0 left-0 right-0'>Zomato</div>
 
    <div className='text-black fixed top-0 right-0 '><button  className='text-[40px]' onClick={handleDisplay}>Profile</button></div>
    <div className='grid grid-col text-textcolor h-screen mt-[60px] text-center text-orange-900 sm1:text-[30px]  w-screen text-[20px]'>
     
    <div >
      {display &&<div > <div className='text-black text-[20px] fixed right-0 mr-[130px]  ' >User:{userName}</div ><div className='text-black text-[20px] fixed right-0 mt-[40px] '>MailId:{userMail}</div></div>
      }
      </div>
        <div className=' mt-[5px] pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'><button> <Link to="/parotta">Parotta</Link></button></div>
        
        <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'>
        <button> <Link to="/dhosai">Dhosai</Link></button>
</div>
        <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'> <button> <Link to="/idiyappam">Idiyappam</Link></button></div>
       <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'> <button> <Link to="/briyani">Briyani</Link></button></div>
       <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'>
        <button> <Link to="/pongal">Pongal</Link></button></div>
   <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'>  <button> <Link to="/vadai">Vadai</Link></button></div>
      <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'><button> <Link to="/idly">Idly</Link></button></div>
    
     
     
      </div>
      
        

    </div>
   
    </>
  )
}

export default Home