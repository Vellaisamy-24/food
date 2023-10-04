import React from 'react'
import { useState } from 'react'
import {useParams} from "react-router-dom"

const Price = () => {
    const {cost}=useParams()
   
    const [calculatedPrice,setCalculatedPrice]=useState()
    const [totalPrice,setTotalPrice]=useState()
     function cal()
    {
        let total=cost*calculatedPrice;
        setTotalPrice(total)
        
    }
  return (
    <>
    <div className='  w-screen pb-[20px] border border-black rounded-t-[36px] w-screen fixed bottom-0 left-0 right-0 bg-backgroundColor'>
      <div className='p-[20px]'>
      
        <div className=' sm1:ml-[20px] lg:text-center'>  <label className='text-[30px] font-exquisite font-semibold shadow-md'>Enter the no of Items</label>
   <input className=' w-2/4 h-[50px] ml-[5px] rounded-[10px] border border-black shadow-2xl' placeholder='count...' type="number" onChange={(e)=>setCalculatedPrice(e.target.value)}/>
   </div>
      
         <div className='m-[20px] text-[20px] lg:ml-[360px] '><button className='hover:bg-red-600 border-[1px] border-black shadow-2xl  border p-[10px] rounded-[10px] font-exquisite font-semibold text-white bg-red-400' type="submit" onClick={cal}>Calculate Price</button></div>
         <div className='shadow-md rounded-[10px] p-[10px] sm:w-[300px] w-[200px] lg:w-[300px] text-[25px] font-light border-[1px] border-black  bg-yellow-300 sm:text-[30px] lg:text-[35px] m-[20px] lg:text-[40px] lg:ml-[360px] font-exquisite'><span className='text-black'>Total Price:</span><span className='text'>&#8377;{totalPrice}</span></div>
      </div>
      </div>
        


    </>
  )
}

export default Price