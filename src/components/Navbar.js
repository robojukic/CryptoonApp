import React, { useState } from "react";
import "./Navbar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Navbar() {
  const [color, setcolor] = useState(false);

  function changeColor() {
    if (window.scrollY > 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar navbar-scrolled" : "navbar "}>
      <h1 className="nav-logo">CRYPTOON</h1>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">Market</a>
        <a href="#">Choose us</a>
        <a href="#">Join</a>
      </div>
      <div className="nav-socialMedia">
        <TwitterIcon />
        <FacebookIcon />
      </div>
    </div>
  );
}

export default Navbar;
