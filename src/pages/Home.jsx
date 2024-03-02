import MovieCard from "../components/MovieCard/MovieCard";
import "./Home.css";
import useMovieList from "../hooks/useMovieList";

export default function Home() {
  const {movieList} = useMovieList('avengers','batman','harry');
  return (
    <div className="movie-card-wrapper">
      {movieList.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
