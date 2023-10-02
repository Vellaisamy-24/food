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
    <div className='gap-4 mt-[90px] sm:grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4'>
    {
      variety.map((food)=>
      (
        <div key={food.id}>
             <div className='mb-[100px] sm2:mb-[50px] sm:w-[400px] grid grid-cols lg-gap-8 '>
              <div className=''><img className="sm2:w-screen sm2:h-auto sm2:object-cover sm:w-[300px] sm:gap-2 sm:h-[250px] lg:w-screen" src={food.image} alt=""/></div>
     
        <div className='flex'>
          <div className='sm:text-[20px] sm2:text-[30px]'>{food.name}</div>
            <div className='ml-[40px] mt-[4px] sm:text-[20px] sm2:text-[25px]  '>cost:</div>
            <div className='ml-[5px] mt-[4px] sm:text-[20px] sm2:text-[25px] text-red-300'>&#8377;{food.cost}</div>
            <div>
        </div>
        </div>
       
          <div className=''><button> <Link to={`/price/${food.cost}`}>OrderNow</Link></button></div>

    </div>

        </div>

     

      ))
    }
         </div>
    </>
    
  )
}

export default Parotta