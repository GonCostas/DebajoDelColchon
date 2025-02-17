import DolarBlue from "./components/DolarBlue";
import DolarOficial from "./components/DolarOficial";
import DolarTarjeta from "./components/DolarTarjeta";
import "./App.css";
import DolarCripto from "./components/DolarCripto";

function App() {
  return (
    <>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    </head>
      <body>
        <div className="barraArriba">
          <h1 className="tituloApp">BAJO EL COLCHÓN</h1>
          <h2 className="tituloApp">COTIZACION DEL DOLAR HOY</h2>
        </div>

        <div className="cajaUno">
          <DolarOficial />
          <DolarBlue />
        </div>
        <div className="cajaDos">
          <DolarTarjeta />
          <DolarCripto />
        </div>
       
      </body>
    </>
  );
}

export default App;
