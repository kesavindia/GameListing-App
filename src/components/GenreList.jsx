import React, { useEffect, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";

function GenreList({setGenrId,selectGenereName}) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState();
//   console.log(activeIndex)
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    GlobalAPI.getGenreList.then((resp) => {
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };
  return (
    <div>
      <h2 className="text-[30px] font-bold">Genre</h2>
      {genreList.map((item,index) => (
        <div onClick={()=>{setActiveIndex(index);setGenrId(item.id);selectGenereName(item.name)}}className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null} `}>
          {/* sending data to parent component */}
          <img            
            src={item.image_background}
            className={`h-[40px] w-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-in-out duration-500 ${activeIndex==index?"scale-105":null}`}
          />
          <h2 className={`text-[18px] group-hover:font-bold transition-all ease-in-out duration-500 ${activeIndex==index?"font-bold":null}`}>
            {item.name}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
