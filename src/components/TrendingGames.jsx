import React, { useEffect } from 'react'
import Home from '../Pages/Home'

function TrendingGames({gameList}) {
    useEffect(()=>{
        console.log(gameList);
    })
  return (
    <div>
        <h2 className='mt-5 hidden md:block font-bold text-[30px] dark:text-white'>Trending Games</h2>
    <div className=' hidden md:grid  sm:grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {gameList.map((item,index)=>index<4&&(
            <div className='bg-gray-300 rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer mt-5'>
                <img src={item.background_image}
                className='h-[270px] object-cover rounded-t-[10px] '/>
                <h2 className='dark:text-white p-2 text-[20px] font-bold'>{item.name}</h2>
            
            </div>
        ))}
    </div>
    </div>
  )
}

export default TrendingGames