import React from 'react'
import dhosai from "../images/dhosai.jpeg"
import {Link} from "react-router-dom"

const Dhosai = () => {
    let cost=30;
  return (
    <><div className='text-red-500 text-[25px]'>parotta</div>
    <div className='grid grid-col'>
        <img src={dhosai} alt=""/>
        <div className='flex'>
            <div>cost:&#8377;30</div>
            <div>
            <button> <Link to={`/price/${cost}`}>OrderNow</Link></button>
                   </div>

        </div>

    </div>
    </>
    
  )
}

export default Dhosai