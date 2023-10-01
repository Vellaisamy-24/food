import React from 'react'
import parota from "../images/parota.jpeg"
import {Link} from "react-router-dom"

const Parotta = () => {
    let cost=15;
  return (
    <><div className='text-red-500 text-[25px]'>parotta</div>
    <div className='grid grid-col'>
        <img src={parota} alt=""/>
        <div className='flex'>
            <div>cost:&#8377;15</div>
            <div>
            <button> <Link to={`/price/${cost}`}>OrderNow</Link></button>
                   </div>

        </div>

    </div>
    </>
    
  )
}

export default Parotta