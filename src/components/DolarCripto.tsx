import { useEffect, useState } from "react";
import { DolarCriptoDatos } from "../services/types/DolarCriptoDatos";
import "../css/dolarCripto.css";
import IconoInfo from "./IconoInfo";

const DolarCripto = () => {
  const [dolarCripto, setDolarCripto] = useState<DolarCriptoDatos | null>(null);

  useEffect(() => {
    async function obtenerDolarCripto() {
      try {
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/cripto");
        const datos: DolarCriptoDatos = await respuesta.json();
        setDolarCripto(datos);
      } catch (error) {
        console.log("Error al obneter los datos de dolar cripto", error);
      }
    }
    obtenerDolarCripto();
  }, []);

  return (
    <div className="dolarCripto">
      <h2 className="tituloCripto">
        DOLAR CRIPTO
        <IconoInfo
          id="tooltip-dolarCripto"
          texto="Cotización del dólar estadounidense
       en el mercado de criptomonedas. Es decir, el precio de compra y venta de dólares en el mercado de criptoactivos."
        />
      </h2>

      {dolarCripto ? (
        <div>
          <div className="grupoCripto">
            <p className="compraCripto">
              <strong>Compra: </strong>${dolarCripto.compra}
            </p>
            <p className="ventaCripto">
              <strong>Venta: </strong>${dolarCripto.venta}
            </p>
          </div>

          <p className="fechaCripto">
            <strong>Ultima actualizacion: </strong>
            {dolarCripto.fechaActualizacion
              ? new Date(dolarCripto.fechaActualizacion).toLocaleString(
                  "es-ES",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )
              : "Cargando..."}
          </p>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default DolarCripto;
