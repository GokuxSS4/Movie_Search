import { useState,useEffect } from "react";
import axios from "axios";
import searchMovie from '../api/omdb';

export default function useMovieList(...args){
    const [movieList, setMovieList] = useState([]);

    async function downloadDefaultData(...args) {
      const urls= args.map((arg)=>searchMovie(arg));
      const response = await axios.all(urls.map((url)=>axios.get(url)));
      if(response[0].data.Error){
        setMovieList([]);
      }
      else{
        const results = response.map((item)=>item.data.Search);
        const resultsList =  [].concat(...results);
        setMovieList(resultsList);
      }
    }
  
    useEffect(() => {
      downloadDefaultData(...args);
    }, [...args]);

    return {movieList};
};