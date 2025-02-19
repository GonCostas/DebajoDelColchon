import "../css/NavBar.css";
import React from "react";


const NavBar: React.FC = () => {
  return (
    <nav className="navBar">
      <div className="appName">DEBAJO DEL COLCHÓN</div>

      <div className="links">
        <a href="/DebajoDelColchón/PageDolar" className="link">DOLAR</a>
        <a href="/DebajoDelColchón/PageEuro" className="link">EURO</a>
        <a href="/DebajoDelColchón/PageInflacion" className="link">INFLACION</a>
      </div>
    </nav>
  );
};


export default NavBar;
