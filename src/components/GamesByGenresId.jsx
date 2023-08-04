import React, { useEffect } from 'react'
import {HiOutlineChatBubbleOvalLeftEllipsis,HiMiniStar,HiFire} from 'react-icons/hi2'


function GamesByGenresId({gameList,selectedGenere}) {

    useEffect(()=>{
        console.log("GameList",gameList);
    })
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white mt-5'>{selectedGenere} Games</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
        {gameList.map((item)=>(
            <div className='bg-gray-300 rounded-lg p-2 h-full hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                <img className='w-full rounded-xl object-cover' src={item.background_image}/>
               <h2 className='text-[20px] dark:text-white font-bold '>{item.name} <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700'>{item.metacritic}</span> </h2>
               <div className='flex ml-2 mt-2 space-x-2.5'>
               <HiMiniStar className='fill-yellow-400'/>{item.rating}<HiOutlineChatBubbleOvalLeftEllipsis className='fill-blue-300'/> {item.reviews_count}<HiFire className='fill-red-800' />{item.suggestions_count}
               </div>
                               
            </div> ))}
        </div>
    </div>
  )
}

export default GamesByGenresId