import React from 'react'
import pongal from "../images/pongal.jpeg"
import {Link} from "react-router-dom"

const Pongal = () => {
    let cost=40;
  return (
    <><div className='text-red-500 text-[25px]'>parotta</div>
    <div className='grid grid-col'>
        <img src={pongal} alt=""/>
        <div className='flex'>
            <div className=''>cost:&#8377;40</div>
            <div>
            <button> <Link to={`/price/${cost}`}>OrderNow</Link></button>
                   </div>

        </div>

    </div>
    </>
    
  )
}

export default Pongal