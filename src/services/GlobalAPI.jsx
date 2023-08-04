import axios from "axios";
const key = "433a3f99e29349dba3b2bd2091fee08b";
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})
const getGenreList = axiosCreate.get('/genres?key='+key)
const getAllGames = axiosCreate.get('/games?key='+key)
const getGamesListByGenreId = (id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default {getGenreList,getAllGames,getGamesListByGenreId}