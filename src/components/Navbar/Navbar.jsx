import { useState,useContext } from "react";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";

export default function Navbar() {
  const [isListVisibile,setIsListVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { movieList } = useMovieList(searchTerm ? searchTerm : 'avengers');
  const navigator = useNavigate();

  const {theme,setTheme} = useContext(ThemeContext);

  function handleClick(e,id){
    navigator(`/movie/${id}`);  
  }

  function updateTheme(){
    if (theme =='dark'){
      setTheme('light');
      localStorage.setItem('app-theme','light');
    }
    else{
      setTheme('dark');
      localStorage.setItem('app-theme','dark');
    }
  }

  return (
    <div className="navbar-wrapper">
      <div className="logo"><Link to="/">MovieHub</Link></div>
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
              <div className="result" key={result.imdbID} onMouseDown={(e)=>handleClick(e,result.imdbID)}>
                {result.Title}
              </div>
            ))}
        </div>
      </div>

      <div className="theme-icon" onClick={updateTheme}>
        <FontAwesomeIcon icon={theme=='dark'?faSun:faMoon}/>
      </div>
    </div>
  );
}
