import React, { useEffect } from 'react'
import Home from '../Pages/Home'

function Banner({gameBanner}) {
    useEffect(()=>{
        console.log("gamebanner",gameBanner);
    },[])
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 w-full'>
            <h2 className='text-[24px] text-white font-bold'>{gameBanner[0].name}</h2>
            <button className='bg-blue-700 text-white px-2 p-1'>Get Now</button>
        </div>
        <img className='md:h-[320px] w-full rounded-xl object-cover ' src={gameBanner[0].background_image}/>
    </div>
  )
}

export default Banner