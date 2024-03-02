import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../api/omdb";
import MovieCard from "../components/MovieCard/MovieCard";
import { Rating } from "@smastrom/react-rating";

// CSS imports
import "./MovieDetails.css";
import "@smastrom/react-rating/style.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  async function getMovieDetails(id) {
    const response = await axios.get(searchMovieById(id));
    setMovieInfo(response.data);
  }

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  return (
    <div className="movie-details-wrapper">
      {movieInfo && (
        <MovieCard
          Title={movieInfo.Title}
          Year={movieInfo.Year}
          Type={movieInfo.Type}
          Poster={movieInfo.Poster}
          id={movieInfo.imdbID}
        />
      )}
      {movieInfo && (
        <div className="movie-details">
          <div>Plot: {movieInfo.Plot}</div>
          <div>Actors: {movieInfo.Actors}</div>
          <div>
            Genre:{" "}
            {movieInfo.Genre.split(",").map((genre) => {
              return (
                <span className="genre" key={genre}>
                  {genre}
                </span>
              );
            })}
          </div>
          <div>
            <Rating items={10} value={Math.floor(movieInfo.imdbRating)} />
          </div>
        </div>
      )}
    </div>
  );
}
