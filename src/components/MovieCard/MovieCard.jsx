import './MovieCard.css';

export default function MovieCard({Title,Type,Year,Poster}) {
  return (
    <div className='movie-wrapper'>
      <div className="movie-image">
        <img src={Poster} alt="poster image.." />
      </div>
      <div className="movie-title">
        <span>Title:{Title}</span>
      </div>
      <div className="movie-type">
        <span>Type:{Type}</span>
      </div>
      <div className="movie-year">
        <span>Year:{Year}</span>
      </div>
    </div>
  )
}
