import React ,{useState} from "react";
import "../styles/header.css";
import logopng from '../assets/logo2.png'
import logopng1 from '../assets/logo1.png'




export default function Header() {
 
  return (
    <header className="header">
      <div className="logo"><img src={logopng} alt="Mohabbatein Sharbat" />
      <img src={logopng1} alt="" className="logoName" />
      </div>
     
        
        <nav>
        <a href='#'>Home</a>
        <a href='#'>Pricing</a>
        <a href="#recipe">Recipe</a>
        <a href="#contact">Contact</a>
      </nav>
      
    </header>
  );
}