import React from 'react'
import {Link} from "react-router-dom"
import { LoginContext } from '../App'
import {useState,useContext} from 'react'
import wheat from "../images/wheat_dhosa.jpeg"


const Home = () => {
  const {userName,userMail}=useContext(LoginContext)
  const [display,setDisplay]=useState(false)
  function handleDisplay()
  {
    setDisplay(!display)
  }
  return (
    <>

 <div className='bg-red-white '>
   
  <div className=' bg-gray-800 sm1:text-[40px] font-exquisite font-bold shadow-md border border-black border-[2px]  fixed  text-white w-screen top-0 left-0 right-0'>Zomato</div>
 
    <div className='text-black fixed top-0 right-0 '><button  className='text-[40px] text-white' onClick={handleDisplay}>Profile</button></div>
    <div className='flex justify-center  items-center w-auto shadow-lg  '>
    <div className='mt-[100px] text-[30px] sm:text-[50px] text-center font-semibold font-ibm-plex-sans bg-violet-400 text-white text-center  w-[400px] sm:font-[40px]'>Menu</div>
    </div>
    
    <div className='grid grid-col sm1:mb-[50px]  text-textcolor h-screen mt-[50px] text-center text-orange-900 sm1:text-[30px]  w-screen text-[20px]'>
     
    <div className=''>
      {display &&<div > <div className='text-black text-[20px]  fixed right-0 mr-[55px] sm:text-[30px]  sm:mr-[200px]  ' >User:{userName}</div ><div className='text-black text-[20px] fixed right-0 mt-[40px] sm:text-[30px]    '>MailId:{userMail}</div></div>
      }
      </div>
     
      
        <div className=' mt-[5px] pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans '><button className=' sm:mb-[30px] lg:mb-[10px] shadow-lg border hover:border hover:border-[2px]  w-[150px] h-[100px] hover:bg-red-400 hover:text-white hover:shadow-2xl transition-transform hover:scale-105  hover:rounded-[7px]'> <Link to="/parotta">Parotta</Link></button></div>
        
        <div className='pb-[5px] text-orange-400  font-semibold font-ibm-plex-sans'>
        <button className='border shadow-lg w-[150px] h-[100px] hover:bg-red-400 hover:text-white hover:shadow-2xl  lg:mb-[10px] transition-transform hover:scale-105 hover:rounded-[7px] '> <Link to="/dhosai">Dhosai</Link></button>
</div>
        <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'> <button className=' sm:mb-[30px]  border shadow-lg w-[150px] h-[100px] hover:bg-red-400 hover:text-white hover:rounded-[7px] hover:shadow-2xl lg:mb-[10px] transition-transform hover:scale-105 '> <Link to="/idiyappam">Idiyappam</Link></button></div>
       <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'> <button className='border w-[150px] h-[100px] shadow-lg  hover:bg-red-400 hover:text-white hover:shadow-2xl lg:mb-[10px]  transition-transform hover:scale-105'> <Link to="/briyani">Briyani</Link></button></div>
       <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'>
        <button className='sm:mb-[30px] border   hover:bg-red-400 hover:text-white shadow-lg w-[150px] h-[100px]  lg:mb-[10px] transition-transform hover:scale-105 hover:rounded-[7px]'> <Link to="/pongal">Pongal</Link></button></div>
   <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'>  <button className='sm:mb-[30px] border shadow-lg w-[150px] h-[100px] hover:bg-red-400 hover:text-white hover:shadow-2xl lg:mb-[10px] transition-transform  hover:rounded-[7px] hover:scale-105 '> <Link to="/vadai">Vadai</Link></button></div>
      <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'><button className=' sm:mb-[30px] border  shadow-lg w-[150px] h-[100px] hover:bg-red-400 hover:text-white hover:shadow-2xl lg:mb-[10px] transition-transform hover:rounded-[7px]  hover:scale-105 '> <Link to="/idly">Idly</Link></button></div>
    
     
     
      </div>
      
        

    </div>
   
    </>
  )
}

export default Home