import React, { useState } from "react";
import logopng from "../assets/logo2.png";
import logopng1 from "../assets/logo1.png";
import "../styles/header.css";


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">

      {/* Logo */}
      <div className="logo">
        <img src={logopng} alt="Mohabbatein Sharbat Logo" className="logoIcon" />
        <img src={logopng1} alt="Mohabbatein Sharbat Name" className="logoName" />
      </div>

      {/* Hamburger Button */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#recipe" onClick={closeMenu}>Recipe</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

    </header>
  );
}
import "../styles/header.css";
