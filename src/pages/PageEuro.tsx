import Euro from "../components/Euro/Euro";
import RealBrasil from "../components/Euro/RealBrasil";
import "../css/pageOtrasMonedas.css";

const PageEuro = () => {
  return (
    <div>
      <h2 className="tituloPrincipal">COTIZACION DE OTRAS MONEDAS</h2>
      <div className="posicion">
        <Euro />
        <RealBrasil />
      </div>
    </div>
  );
};

export default PageEuro;
