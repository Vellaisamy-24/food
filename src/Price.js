import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"

const Price = () => {
    const {cost,name}=useParams()
   
    const [quantity,setQuantity]=useState()
    const [totalPrice,setTotalPrice]=useState()
     function cal()
    {
        let total=cost*quantity;
        setTotalPrice(total)
        
    }
  return (
    <>
    <div className='   w-screen pb-[20px] border border-black rounded-t-[36px] w-screen fixed bottom-0 left-0 right-0 bg-backgroundColor shadow-lg'>
      <div className='m-[15px] ' ><span className='lg:ml-[390px]   sm1:ml-[20px] lg:text-center text-[30px] font-exquisite font-semibold shadow-sm'>Selected Item:</span><span className=' sm1:text-[18px] sm:text-[30px] ml-[15px] text-montserrat  lg:text-[22px] font-normal not-italic  text-green-600 md:text-[21px]'>{name}</span></div>
      <div className='m-[15px] mt-[23px]' ><span className='lg:ml-[390px]   sm1:ml-[20px] lg:text-center text-[30px] font-exquisite font-semibold shadow-sm'>Cost:</span><span className='ml-[10px] text-orange-500 text-[22px]'>&#8377;{cost}</span></div>
      <div className='p-[20px]'>
      
        <div className=' sm1:ml-[20px] lg:text-center mb-[50px] lg:ml[390px]'>  <label className='text-[30px] font-exquisite font-semibold shadow-sm'>Enter the no of Items</label>
   <input className=' w-2/4 h-[50px] ml-[5px] rounded-[10px] border border-black shadow-2xl' placeholder='count...' type="number" onChange={(e)=>setQuantity(e.target.value)}/>
   </div>
      
         <div className='m-[20px] mb-[30px]  text-[20px] lg:ml-[360px] 2xl:ml-[380px] '><button className='hover:bg-red-600 border-[1px] border-black shadow-2xl  border p-[10px] rounded-[10px] font-exquisite font-semibold text-white bg-red-400' type="submit" onClick={cal}>Calculate Price</button></div>
         <div className='shadow-md rounded-[10px] p-[10px] 2xl:ml-[380px] sm:w-[300px] w-[200px] lg:w-[300px] text-[25px] font-light border-[1px] border-black  bg-yellow-300 sm:text-[30px] lg:text-[35px] m-[20px] lg:text-[40px] lg:ml-[360px] font-exquisite'><span className='text-black'>Total Price:</span><span className='text'>&#8377;{totalPrice}</span></div>
      </div>
      <div className="text-center text-[30px]  "><button className='border  hover:bg-violet-500 sm1:p-[10px] lg:p-[15px] 2xl:w-[200px] shadow-lg rounded rounded-[9px] bg-violet-600 font-semibold font-poppins text-white'><Link to={`/placeOrder/${name}/${cost}/${quantity}/${totalPrice}`}>place order </Link></button></div>
      </div>
        


    </>
  )
}

export default Price