import "../css/NavBar.css";
import React from "react";


const NavBar: React.FC = () => {
  return (
    <nav className="navBar">
      <div className="appName">DEBAJO DEL COLCHÓN</div>

      <div className="links">
        <a href="/pageDolar" className="link">DOLAR</a>
        <a href="/pageEuro" className="link">EURO</a>
        <a href="/pageInflacion" className="link">INFLACION</a>
      </div>
    </nav>
  );
};


export default NavBar;
