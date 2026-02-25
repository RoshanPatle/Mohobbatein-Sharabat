
import "../styles/header.css";
import logopng from '../assets/logo1.png'

export default function Header() {
  return (
    <header className="header">
      <img src={logopng} alt="Mohabbatein Sharbat" />
      <nav>
        <a href="#home">Home</a>
        <a href="#pricing">Pricing</a>
        <a href="#recipe">Recipe</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}