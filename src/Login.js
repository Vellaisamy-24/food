import React from 'react'
import {useState,useContext} from 'react'
import {Link} from "react-router-dom"
import { LoginContext } from './App'


const Login = () => {
    const {setUserName,setUserMail,setUserPassword}=useContext(LoginContext)
    function handleSubmit(e)

    {
        e.preventDefault()
        
    }

  return (
    <>
    <div className=' 2xl:p-[15px] 2xl:mt-[250px] 2xl:w-[600px] h-auto  mx-auto my-auto mt-[100px] border border-black border-[1px] shadow-lg p-[10px] w-[300px] '>
        <h1 className=' lg:text-[50px] text-[30px] text-center font-semibold font-ibm-plex-sans'>Login</h1>
    <form onSubmit={handleSubmit}>
    <div className='my-[15px] '>
        <div className=' my-[10px] lg:mb-[15px]'> <label className='  lg:text-[30px]  text-[20px] font-montserrat '>Full Name</label></div>
       <div><input  className=" lg:h-[40px] rounded-[5px]" type="text" required placeholder="Full Name" onChange={(e)=>setUserName(e.target.value)}/></div>
        
    </div>
    <div  className='my-[15px]'>
        <div  className=' my-[10px]'> <label className='lg:text-[30px] font-montserrat text-[20px]'>Email</label></div>
       <div> <input className="lg:h-[40px] rounded-[5px] " type="email"  placeholder='email' required onChange={(e)=>setUserMail(e.target.value)} /></div>
       
    </div>
    <div  className='my-[15px]'>
        <div  className=' my-[10px]'> <label className='lg:text-[30px] font-montserrat text-[20px]'>Password</label></div>
       <div>  <input className=" lg:h-[40px] rounded-[5px]" type="password"  placeholder="password" required onChange={(e)=>setUserPassword(e.target.value)}/></div>
      
    </div>
    <div  className='my-[15px] text-center '>
        <button  className="2xl:w-[150px] text-[20px] text-center border border-black border-[2px] p-[10px] mt-[5px] shadow-md rounded-[6px]" type="submit"><Link to="/home">Login</Link></button>
    </div> 
    </form>
    </div>

 
    
    
    </>

  )
}

export default Login