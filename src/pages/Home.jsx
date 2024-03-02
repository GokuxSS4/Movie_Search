import MovieCard from "../components/MovieCard/MovieCard";
import "./Home.css";
import useMovieList from "../hooks/useMovieList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const {movieList} = useMovieList('avengers','batman','harry');
  const navigator = useNavigate();

  function handleClick(id){
    console.log("click");
    navigator(`/movie/${id}`)
  }
  return (
    <div className="movie-card-wrapper">
      {movieList.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} onHandleClick={()=>handleClick(movie.imdbID)} />
      ))}
    </div>
  );
}
