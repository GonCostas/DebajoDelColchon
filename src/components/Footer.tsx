import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#008F68", color: "white" }}>
      <p>© {new Date().getFullYear()} Debajo del Colchón. Todos los derechos reservados.</p>
      <p>
        <Link to="/terminos-condiciones" style={{ color: "white", textDecoration: "none", marginRight: "10px" }}>
          Términos y Condiciones
        </Link>
        |
        <Link to="/politica-privacidad" style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}>
          Política de Privacidad
        </Link>
      </p>
      <div style={{ marginTop: "10px" }}>
        <p>Contacto:</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", fontSize: "24px" }}>
          <a href="https://www.linkedin.com/in/gcostas95/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/GonCostas" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>

      <p style={{ marginTop: "10px", fontSize: "14px", color: "white" }}>
        Información obtenida de <a href="https://dolarapi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>DolarApi.com</a>
      </p>
    </footer>
  );
};

export default Footer;
