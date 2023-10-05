import React from 'react'
import { useState } from 'react'
import idly from "../images/idly.jpeg"
import kanchi from "../images/kanchi_idly.jpeg"
import ragi from "../images/ragi_idly.jpeg"
import rava from "../images/rava_idly.jpeg"
import mini from "../images/mini_idly.jpeg"
import multigrain from "../images/multigrain_idly.jpeg"
import oats from "../images/oats_idly.jpeg"
import vegetable from "../images/vegetable_idly.jpeg"

import {Link} from "react-router-dom"

const Idly = () => {
   
    const [variety,setVariety]=useState([
      {
        id:1,
        name:"Idly",
        image:idly,
        cost:7,
      },
      {
        id:2,
        name:"Kanchi Idly",
        image:kanchi,
        cost:30
      },
      {
        id:3,
        name:"Ragi Idly",
        image:ragi,
        cost:15
      },
      {
        id:4,
        name:"Rava Idly",
        image:rava,
        cost:12
      },
      {
        id:5,
        name:"Mini Idly",
        image:mini,
        cost:5
      },
      {
        id:6,
        name:"Vegetable Idly",
        image:vegetable,
        cost:15
      },
      {
        id:7,
        name:"Oats Idly",
        image:oats,
        cost:25
      },
      {
        id:8,
        name:"Multigrain Idly",
        image:multigrain,
        cost:45
      },

    ])
  return (
    <><div className='fixed bg-red-200 text-center w-screen top-0 left-0 right-0 text-red-500 sm:text-[50px] '>Idly</div>
    <div className='bg-backgroundColor w-screen gap-4 mt-[90px] sm:grid grid-cols-2  md:grid-cols-2  lg:grid-cols-3 lg:gap-8  2xl:grid-cols-4   '>
    {
      variety.map((food)=>
      (
        <div key={food.id}>
             <div className='mb-[100px]  md:gap-8 sm2:mb-[50px] sm:w-[400px] grid grid-cols lg-gap-8 sm1:border sm1:rounded-[30px] sm1:border-[5px] sm1:p-[5px] sm1:pt-[10px] lg:border lg:rounded-[30px] lg:p-[5px] 2xl:w-[300px]   '>
              <div className=''><img className="sm1:rounded-[10px] sm:rounded-[15px] md:w-screen sm1:w-screen sm2:h-auto sm2:object-cover sm:w-screen sm:gap-2 sm:h-[250px] lg:w-screen" src={food.image} alt=""/></div>
     
        <div className='flex'>
          <div className=' pt-[1px] sm2:text-[25px] sm2:font-bold not-italic  mt-[5px] ml-[10px] lg:text-[27px] font-poppins text-black-500 sm:text-[25px] sm2:text-[30px] lg:-mt-[20px]'>{food.name}</div>
            <div className='mt-[9px] sm2:mt-[15px] not-italic font-montserrat lg:text-[25px]   sm:text-[20px] sm2:text-[25px] sm:ml-[30px] sm1:ml-[50px] lg:ml-[80px] lg:-mt-[14px] '>cost:</div>
            <div className='ml-[5px] sm2:mt-[15px] mt-[9px] sm:text-[20px] sm2:text-[25px] text-red-300    font-bold lg:-mt-[10px] '>&#8377;{food.cost}</div>
            <div>
        </div>
        </div>
       
          <div className=' ml-[10px] sm2:mt-[5px] sm2:font-semibold text-[25px] font-ibm-plex-sans text-red-500 lg:-mt-[25px] lg:mb-[10px]'><button className='tracking-[0.2px] border-[3px] border-red-100 rounded-[15px] sm2:p-[5px] sm1:mt-[5px] sm1:mb-[15px]'> <Link to={`/price/${food.cost}/${food.name}`}>OrderNow</Link></button></div>

    </div>

        </div>

     

      ))
    }
         </div>
    </>
    
  )
}

export default Idly