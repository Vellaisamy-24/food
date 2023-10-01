import React from 'react'
import idiyapam from "../images/idiyapam.jpeg"
import {Link} from "react-router-dom"

const Idiyappam = () => {
    let cost=25;
  return (
    <><div className='text-red-500 text-[25px]'>parotta</div>
    <div className='grid grid-col'>
        <img src={idiyapam} alt=""/>
        <div className='flex'>
            <div>cost:&#8377;25</div>
            <div>
            <button> <Link to={`/price/${cost}`}>OrderNow</Link></button>
                   </div>

        </div>

    </div>
    </>
    
  )
}

export default Idiyappam