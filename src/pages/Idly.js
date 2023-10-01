import React from 'react'
import idly from "../images/idly.jpeg"
import {Link} from "react-router-dom"

const Idly = () => {
    let cost=7;
  return (
    <><div className='text-red-500 text-[25px]'>parotta</div>
    <div className='grid grid-col'>
        <img src={idly} alt=""/>
        <div className='flex'>
            <div>cost:&#8377;7</div>
            <div>
            <button> <Link to={`/price/${cost}`}>OrderNow</Link></button>
                   </div>

        </div>

    </div>
    </>
    
  )
}

export default Idly