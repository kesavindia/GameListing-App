import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalAPI from "../services/GlobalAPI";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenresId from "../components/GamesByGenresId";
function Home() {
  const [allGamesList, setAllGamesList] = useState([]);
  const [gameListByGenres,setGameListByGenres]=useState([])
  const [selectedGenereName,setSelectedGenereName]=useState('Action')
  useEffect(() => {
    getAllGamesList();
    getGamesListByGenresId(4);
  }, []);
  const getAllGamesList = () => {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results);
     
    });
  };
  const getGamesListByGenresId =(id)=>{
    console.log("GenresID",id);
    GlobalAPI.getGamesListByGenreId(id).then((resp)=>{     
      console.log("Game List By GenresId:",resp.data.results);
      setGameListByGenres(resp.data.results);
    })
  }
  return (
    <div className="grid grid-cols-4 px-8">
      <div className=" h-full hidden md:block">
        <GenreList setGenrId={(setGenresIdtolist)=>getGamesListByGenresId(setGenresIdtolist)} 
        selectGenereName={(x)=>setSelectedGenereName(x)}/>
        {/* /*recieving props from child component*/}
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList.length > 0 && gameListByGenres.length>0? (
          <div>
            <Banner gameBanner={allGamesList} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenresId  gameList={gameListByGenres} selectedGenere={selectedGenereName}/>

          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
