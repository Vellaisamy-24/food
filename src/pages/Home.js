import React from 'react'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <>
 
   <div className='fixed bg-red-200 w-screen top-0 left-0 right-0'>Zomato</div>
    <div className='grid grid-col  h-screen mt-[100px]  w-screen text-[20px]'>
     
      
        <div className='pb-[20px]'><button> <Link to="/parotta">Parotta</Link></button></div>
        
        <div className='pb-[20px]'>
        <button> <Link to="/dhosai">Dhosai</Link></button>
</div>
        <div className='pb-[20px]'> <button> <Link to="/idiyappam">Idiyappam</Link></button></div>
       <div className='pb-[20px]'> <button> <Link to="/briyani">Briyani</Link></button></div>
       <div className='pb-[20px]'>
        <button> <Link to="/pongal">Pongal</Link></button></div>
   <div className='pb-[20px]'>  <button> <Link to="/vadai">Vadai</Link></button></div>
      <div className='pb-[20px]'><button> <Link to="/idly">Idly</Link></button></div>
    
     
     
   
      
        

    </div>
   
    </>
  )
}

export default Home