import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

function Navbar({ onPageChange }) {
  const showNavbar = () => {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("responsive-nav");
  };

  const handleLinkClick = (page) => {
    onPageChange(page);
    showNavbar();
  };

  return (
    <header>
      <img src="LOGO.JPG" alt="UCISA_logo" />
      <nav id="navbar">
        <a href="/#" onClick={() => handleLinkClick("Home")}>Home</a>
        <a href="/#" onClick={() => handleLinkClick("UCISA")}>UCISA</a>
        <a href="/#" onClick={() => handleLinkClick("Execs")}>Execs</a>
        <a href="/#" onClick={() => handleLinkClick("Events")}>Events</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
