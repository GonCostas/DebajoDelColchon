import DolarOficial from "../components/componentsDolar/DolarOficial";
import DolarBlue from "../components/componentsDolar/DolarBlue";
import DolarCripto from "../components/componentsDolar/DolarCripto";
import DolarTarjeta from "../components/componentsDolar/DolarTarjeta";
import "../css/pageDolar.css"

const PageDolar = () => {
  return (
    <div>
      <h2 className="tituloDos">COTIZACION DEL DOLAR HOY</h2>
      <div className="cajaUno">
        <DolarOficial />
        <DolarBlue />
      </div>
      <div className="cajaDos">
        <DolarTarjeta />
        <DolarCripto />
      </div>
    </div>
  );
};

export default PageDolar;
