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
        <a href="/DebajoDelColchon/OtrasMonedas" className="link">
          OTRAS MONEDAS
        </a>
        <a href="/DebajoDelColchon/PageInflacion" className="link">
          INFLACION
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
