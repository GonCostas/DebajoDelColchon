import Euro from "../components/OtrasMonedas/Euro";
import PesoChileno from "../components/OtrasMonedas/PesoChileno";
import PesoUruguayo from "../components/OtrasMonedas/PesoUruguayo";
import RealBrasil from "../components/OtrasMonedas/RealBrasil";
import "../css/pageOtrasMonedas.css";

const PageEuro = () => {
  return (
    <div>
      <h2 className="tituloPrincipal">COTIZACION DE OTRAS MONEDAS</h2>
      <div className="posicion">
        <Euro />
        <RealBrasil />
        <PesoUruguayo/>
        <PesoChileno/>
      </div>
    </div>
  );
};

export default PageEuro;
