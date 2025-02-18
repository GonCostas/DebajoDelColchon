import DolarOficial from "../components/Dolar/DolarOficial";
import DolarBlue from "../components/Dolar/DolarBlue";
import DolarCripto from "../components/Dolar/DolarCripto";
import DolarTarjeta from "../components/Dolar/DolarTarjeta";
import "../css/pageDolar.css"
import DolarBolsa from "../components/Dolar/DolarBolsa";
import DolarMayorista from "../components/Dolar/DolarMayorista";

const PageDolar = () => {
  return (
    <div>
      <h2 className="tituloDos">COTIZACION DEL DOLAR HOY</h2>
      <div className="cajaUno">
        <DolarOficial />
        <DolarBlue />
        <DolarTarjeta />
        <DolarCripto />
        <DolarBolsa/>
        <DolarMayorista/>
      </div>

    </div>
  );
};

export default PageDolar;
