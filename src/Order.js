import React from 'react'
import {useParams} from "react-router-dom"
const Order = () => {
    const {name,cost,quantity,totalprice}=useParams()
  return (
    <div className=' p-[10px] md:p-[20px] m md:ml-[900px] md:mt-[300px] border  md:w-[300px]'>
        <div className='font-bold md:text-[40px] m-[10px] md:p-[15px]'> Bill Details</div>
        <form>
<div>Food Name:{name}</div>
<div>Food Cost:{cost}</div>
<div>{quantity}</div>
<div>{totalprice}</div>

            <input type="text" placeholder='Enter the adddress to be delivered' />
            </form>
    </div>
    
  )
}

export default Order