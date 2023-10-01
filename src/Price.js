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
    <div>
        <input className='bg-red-200' type="number" onChange={(e)=>setCalculatedPrice(e.target.value)}/>
         <button type="submit" onClick={cal}>submit</button>
         <h1>Total Price:{totalPrice}</h1>

    </div>
  )
}

export default Price