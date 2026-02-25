
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="./src/assets/logo1.png" alt="Mohabbatein Sharbat" />
      <nav>
        <a href="#home">Home</a>
        <a href="#pricing">Pricing</a>
        <a href="#recipe">Recipe</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}