import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {searchMovieById} from '../api/omdb';
import MovieCard from "../components/MovieCard/MovieCard";

export default function MovieDetails() {
  const {id} = useParams();
  const [movieInfo,setMovieInfo] = useState(null);

  async function getMovieDetails(id){
    const response = await axios.get(searchMovieById(id));
    setMovieInfo(response.data);
  };

  useEffect(()=>{
    getMovieDetails(id);
  },[id]);

  return (
    <>
     {movieInfo && <MovieCard {...movieInfo}/>}
    </>
  )
}
