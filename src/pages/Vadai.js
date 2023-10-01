import React from 'react'
import vadai from "../images/vadai.jpeg"
import {Link} from "react-router-dom"

const Vadai = () => {
    let cost=10;
  return (
    <><div className='text-red-500 text-[25px]'>parotta</div>
    <div className='grid grid-col'>
        <img src={vadai} alt=""/>
        <div className='flex'>
            <div>cost:&#8377;10</div>
            <div>
            <button> <Link to={`/price/${cost}`}>OrderNow</Link></button>
                   </div>

        </div>

    </div>
    </>
    
  )
}

export default Vadai