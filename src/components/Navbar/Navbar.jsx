import { useState } from "react";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import "./Navbar.css";

export default function Navbar() {
  const [isListVisibile,setIsListVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm ? searchTerm : 'avengers');
  return (
    <div className="navbar-wrapper">
      <div className="logo">MovieHub</div>
      <div className="search">
        <input
          type="text"
          onFocus={() =>setIsListVisible(true)}
          onBlur={() => setIsListVisible(false)}
          onChange={useDebounce((e)=>setSearchTerm(e.target.value))}
        />
        <div className={`result-list  ${isListVisibile ? 'visible':'not-visible'}`}>
           {movieList.length > 0 &&
            movieList.slice(0, 5).map((result)=> (
              <div className="result" key={result.imdbID}>
                {result.Title}
              </div>
            ))}
        </div>
      </div>

      <div className="theme">Theme</div>
    </div>
  );
}
