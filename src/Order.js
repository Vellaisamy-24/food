import React from 'react'
import {useState,useContext} from "react"
import {useParams} from "react-router-dom"
import { LoginContext } from './App'
const Order = () => {
    const [display,setDisplay]=useState(false)
    const {userName}=useContext(LoginContext)
    const {name,cost,quantity,totalprice}=useParams()
    function handleSubmit(e)
    {
        e.preventDefault()
    }
    function place()
    {
      alert("Ordered successfull")

    }
  return (
    <div className='bg-backgroundColor lg:w-[500px] p-[10px] md:p-[20px] m md:ml-[900px] md:mt-[300px] border  md:w-[300px]'>
        <div className='font-bold md:text-[40px] m-[10px] md:p-[15px] text-orange-400'> Bill Details</div>
        <form onSubmit={handleSubmit}>

<div className='m-[10px]'>
    <span className='font-bold font-montserrat md:text-[20px]'>Food Name:</span>
    <span className='ml-[5px]'>{name}</span>
    </div>
<div className='m-[10px]'>
    <span className='font-bold font-montserrat md:text-[20px]'>Food Cost:</span>
    <span>{cost}</span>
    </div>
<div className='m-[10px]'>
    <span className='font-bold font-montserrat md:text-[20px]'>Quantity:</span>
    <span>{quantity}</span>
    </div>
    <div className='m-[10px]'>
        <span className='font-bold font-montserrat md:text-[20px]'>User:</span>
        <span>{userName}</span>
        </div>
    <div className='m-[10px]'><span className='font-bold font-montserrat md:text-[20px]'>TotalPrice:</span>
    <span>{totalprice}</span></div>

<div className='m-[10px]'>

</div>
<div className='m-[10px]'><span className='font-bold font-montserrat md:text-[20px] '>Address</span>

            <span><input type="text" required placeholder='Enter the adddress to be delivered' /></span>
            </div>
            <div className='m-[10px]'>
                <span className='font-bold font-montserrat md:text-[20px]'>Mobile.No</span>
                <span><input type="number" required placeholder='number' /></span>
            </div>
            <div className='text-center mt-[30px] '>    <button className=' font-semibold p-[10px] text-[25px] shadow-lg rounded-[6px] hover:text-bold hover:text-orange-700 hover:bg-white font-ibm-plex-sans bg-violet-400 text-white' type="submit" onClick={place}>Confirm Order</button></div>
        
           
            </form>
    </div>
    
  )
}

export default Order