import React from 'react'
import {useState,useContext} from 'react'
import {Link} from "react-router-dom"
import { LoginContext } from './App'


const Login = () => {
    const {setUserName,setUserMail,setUserPassword}=useContext(LoginContext)

  return (
    <>
    <div className=' '>
        <h1 className='text-[25px]'>Login</h1>
    <form onSubmit={(e)=>e.preventDefault()}>
    <div className=''>
        <label className='text-[20px]'>Full Name</label>
        <input  className="border border-[2px] " type="text" placeholder="Full Name" onChange={(e)=>setUserName(e.target.value)}/>
    </div>
    <div>
        <label className='text-[20px]'>Email</label>
        <input className=" border border-[2px] " type="email" placeholder='email' required onChange={(e)=>setUserMail(e.target.value)} />
    </div>
    <div>
        <label className=' text-[20px]'>Password</label>
        <input className="border border-[2px] " type="password" placeholder="password" required onChange={(e)=>setUserPassword(e.target.value)}/>
    </div>
    <div>
        <button  className=" text-[20px] border border-black border-[2px] p-[5px] m-[3px] shadow-lg rounded-[10px]" type="submit"><Link to="/home">Login</Link></button>
    </div> 
    </form>
    </div>

 
    
    
    </>

  )
}

export default Login