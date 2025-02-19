import "../css/NavBar.css";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="navBar">
      <div className="appName">DEBAJO DEL COLCHÓN</div>

      <div className="links">
        <a href="/DebajoDelColchon/PageDolar" className="link">
          DOLAR
        </a>
        <a href="/DebajoDelColchon/PageEuro" className="link">
          EURO
        </a>
        <a href="/DebajoDelColchon/PageInflacion" className="link">
          INFLACION
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
