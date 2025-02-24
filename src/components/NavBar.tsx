import "../css/NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="navBar">
      <div className="appName">DEBAJO DEL COLCHÓN</div>

      <div className="links">
        <a href="/DebajoDelColchon/PageDolar" className="link">
          DOLAR
        </a>
        <Link to="/DebajoDelColchon/OtrasMonedas" className="link">
          OTRAS MONEDAS
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
