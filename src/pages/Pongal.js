import React from 'react'
import { useState } from 'react'
import venn from "../images/venn_pongal.jpeg"
import chakara from "../images/chakara_pongal.jpeg"
import puli from "../images/puli_pongal.jpeg"
import melagu from "../images/melagu_pongal.jpeg"

import {Link} from "react-router-dom"

const Pongal = () => {
    let cost=15;
    const [variety,setVariety]=useState([
      {
        id:1,
        name:"Venn Pongal",
        image:venn,
        cost:40,
      },
      {
        id:2,
        name:"Chakara Pongal",
        image:chakara,
        cost:35,
      },
      {
        id:3,
        name:"Melagu Pongal",
        image:melagu,
        cost:30,
      },
      {
        id:4,
        name:"Puli Pongal",
        image:puli,
        cost:40,
      },
      
      

    ])
  return (
    <><div className='fixed bg-red-400 text-center text-[40px] font-bold font-exquisite text-white w-screen top-0 left-0 right-0 text-red-500 sm:text-[50px] '>Pongal</div>
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
       
          <div className=' ml-[10px] sm2:mt-[5px] sm2:font-semibold text-[25px] font-ibm-plex-sans text-red-500 lg:-mt-[25px] lg:mb-[10px]'><button className='tracking-[0.2px] border-[3px] border-red-100 rounded-[15px] sm2:p-[5px] sm1:mt-[5px] sm1:mb-[15px] hover:text-white hover:bg-red-500 transition-transform  hover:scale-105 hover:shadow-2xl'> <Link to={`/price/${food.cost}/${food.name}`}>OrderNow</Link></button></div>

    </div>

        </div>

     

      ))
    }
         </div>
    </>
    
  )
}

export default Pongal