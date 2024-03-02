import { useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const resultRef = useRef(null);
  return (
    <div className="navbar-wrapper">
      <div className='logo'>MovieHub</div>
      <div className="search">
        <input
          type="text"
          onFocus={() => (resultRef.current.style.display = "block")}
          onBlur={() => (resultRef.current.style.display = "none")}
        />
        <div className="result-list" ref={resultRef}>
          <div className="result">Result1</div>
          <div className="result">Result2</div>
          <div className="result">Result3</div>
        </div>
      </div>

      <div className='theme'>Theme</div>
    </div>
  );
}
