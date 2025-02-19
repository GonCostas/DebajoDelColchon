import "../css/NavBar.css";
import React from "react";


const NavBar: React.FC = () => {
  return (
    <nav className="navBar">
      <div className="appName">DEBAJO DEL COLCHÓN</div>

      <div className="links">
        <a href="/DebajoDelColchon/Dolar" className="link">DOLAR</a>
        <a href="/DebajoDelColchon/Euro" className="link">EURO</a>
        <a href="/DebajoDelColchon/Inflacion" className="link">INFLACION</a>
      </div>
    </nav>
  );
};


export default NavBar;
