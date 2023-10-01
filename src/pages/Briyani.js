import React from 'react'
import briyani from "../images/briyani.jpeg"
import {Link} from "react-router-dom"

const Briyani = () => {
    let cost=100;
  return (
    <><div className='text-red-500 text-[25px]'>parotta</div>
    <div className='grid grid-col'>
        <img src={briyani} alt=""/>
        <div className='flex'>
            <div>cost:&#8377;100</div>
            <div>
            <button> <Link to={`/price/${cost}`}>OrderNow</Link></button>
                   </div>

        </div>

    </div>
    </>
    
  )
}

export default Briyani