import React from 'react'
import { useState } from 'react'
import parota from "../images/parota.jpeg"
import kizhi from "../images/kizhi_parota.jpeg"
import kothu from "../images/kothu_parota.jpeg"
import coin from "../images/coin_parota.jpeg"
import ceylon from "../images/ceylon_parota.jpeg"
import bun from "../images/Bun_parota.jpeg"
import chilli from "../images/chilli_parota.jpeg"


import {Link} from "react-router-dom"

const Parotta = () => {
    let cost=15;
    const [variety,setVariety]=useState([
      {
        id:1,
        name:"Normal Parotta",
        image:parota,
        cost:10,
      },
      {
        id:2,
        name:"Kizhi Parotta",
        image:kizhi,
        cost:40
      },
      {
        id:3,
        name:"Kothu Parotta",
        image:kothu,
        cost:45
      },
      {
        id:4,
        name:"Bun Parotta",
        image:coin,
        cost:20
      },
      {
        id:5,
        name:"Bun Parotta",
        image:ceylon,
        cost:20
      },
      {
        id:6,
        name:"Bun Parotta",
        image:bun,
        cost:20
      },
      {
        id:7,
        name:"Bun Parotta",
        image:parota,
        cost:20
      },
      {
        id:8,
        name:"Bun Parotta",
        image:chilli,
        cost:20
      },

    ])
  return (
    <><div className='fixed bg-red-200 text-center w-screen top-0 left-0 right-0 text-red-500 sm:text-[50px] '>parotta</div>
    <div className='bg-backgroundColor w-screen gap-4 mt-[90px] sm:grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4   '>
    {
      variety.map((food)=>
      (
        <div key={food.id}>
             <div className='mb-[100px]  md:gap-8 sm2:mb-[50px] sm:w-[400px] grid grid-cols lg-gap-8 sm1:border sm1:rounded-[30px] sm1:border-[5px] sm1:p-[5px] sm1:pt-[10px] lg:border lg:rounded-[30px] lg:p-[5px]  '>
              <div className=''><img className="sm1:rounded-[10px] sm:rounded-[15px] sm1:w-screen sm2:h-auto sm2:object-cover sm:w-[300px] sm:gap-2 sm:h-[250px] lg:w-screen" src={food.image} alt=""/></div>
     
        <div className='flex'>
          <div className=' pt-[1px] sm2:text-[25px] sm2:font-bold not-italic  mt-[5px] ml-[10px] lg:text-[27px] font-poppins text-black-500 sm:text-[25px] sm2:text-[30px] lg:-mt-[20px]'>{food.name}</div>
            <div className='mt-[9px] sm2:mt-[15px] not-italic font-montserrat lg:text-[25px]   sm:text-[20px] sm2:text-[25px] sm:ml-[30px] sm1:ml-[50px] lg:ml-[80px] lg:-mt-[14px] '>cost:</div>
            <div className='ml-[5px] sm2:mt-[15px] mt-[9px] sm:text-[20px] sm2:text-[25px] text-red-300 lg:mt-[13px]  lg:mt-[19px] font-bold lg:-mt-[10px] '>&#8377;{food.cost}</div>
            <div>
        </div>
        </div>
       
          <div className=' ml-[10px] sm2:mt-[5px] sm2:font-semibold text-[25px] font-ibm-plex-sans text-red-500 lg:-mt-[25px] lg:mb-[10px]'><button className='tracking-[0.2px] border-[3px] border-red-100 rounded-[15px] sm2:p-[5px] sm1:mt-[5px] sm1:mb-[15px]'> <Link to={`/price/${food.cost}`}>OrderNow</Link></button></div>

    </div>

        </div>

     

      ))
    }
         </div>
    </>
    
  )
}

export default Parotta