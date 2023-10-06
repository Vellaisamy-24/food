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

 <div className='bg-gray-500  '>
   
  <div className=' bg-gray-800 sm1:text-[40px] font-exquisite font-bold shadow-md border border-black border-[2px]  fixed  text-white w-screen top-0 left-0 right-0'>Zomato</div>
 
    <div className='text-black fixed top-0 right-0 '><button  className='text-[40px]' onClick={handleDisplay}>Profile</button></div>
    <div className='flex justify-center  items-center w-auto shadow-lg  '>
    <div className='mt-[100px] text-[30px] sm:text-[50px] text-center font-semibold font-ibm-plex-sans bg-violet-400 text-white text-center  w-[400px] sm:font-[40px]'>Menu</div>
    </div>
    
    <div className='grid grid-col sm1:mb-[50px]  text-textcolor h-screen mt-[50px] text-center text-orange-900 sm1:text-[30px]  w-screen text-[20px]'>
     
    <div >
      {display &&<div > <div className='text-black text-[20px] fixed right-0 mr-[130px]  ' >User:{userName}</div ><div className='text-black text-[20px] fixed right-0 mt-[40px] '>MailId:{userMail}</div></div>
      }
      </div>
     
      
        <div className=' mt-[5px] pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'><button className=' sm:mb-[30px] sm:shadow-2xl shadow-lg shadow-lg border md:border-[5px] w-[150px] h-[100px] '> <Link to="/parotta">Parotta</Link></button></div>
        
        <div className='pb-[5px] text-black font-semibold font-ibm-plex-sans'>
        <button className='border sm:shadow-2xl shadow-lg w-[150px] h-[100px] '> <Link to="/dhosai">Dhosai</Link></button>
</div>
        <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'> <button className=' sm:mb-[30px]  border sm:shadow-2xl shadow-lg w-[150px] h-[100px] '> <Link to="/idiyappam">Idiyappam</Link></button></div>
       <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'> <button className='border sm:shadow-2xl shadow-lg w-[150px] h-[100px] '> <Link to="/briyani">Briyani</Link></button></div>
       <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'>
        <button className='sm:mb-[30px] border sm:shadow-2xl shadow-lg w-[150px] h-[100px] '> <Link to="/pongal">Pongal</Link></button></div>
   <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'>  <button className='sm:mb-[30px] border sm:shadow-2xl shadow-lg w-[150px] h-[100px] '> <Link to="/vadai">Vadai</Link></button></div>
      <div className='pb-[5px] text-orange-400 font-semibold font-ibm-plex-sans'><button className=' sm:mb-[30px] border sm:shadow-2xl shadow-lg w-[150px] h-[100px] '> <Link to="/idly">Idly</Link></button></div>
    
     
     
      </div>
      
        

    </div>
   
    </>
  )
}

export default Home