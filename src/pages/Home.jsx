import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";
import "./Home.css";
import searchMovie from "../api/omdb";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  async function downloadDefaultData(...args) {

    console.log(args);
    const urls= args.map((arg)=>searchMovie(arg));
    const response = await axios.all(urls.map((url)=>axios.get(url)));
    const results = response.map((item)=>item.data.Search);
    const resultsList =  [].concat(...results);
    setMovieList(resultsList);
  }

  useEffect(() => {
    downloadDefaultData("harry","batman","avengers");
  }, []);

  return (
    <div className="movie-card-wrapper">
      {movieList.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
