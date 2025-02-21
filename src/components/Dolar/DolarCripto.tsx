import { useEffect, useState } from "react";
import { DatosMonedas } from "../../services/types/DatosMonedas";
import "../../css/caja.css";
import IconoInfo from "../IconoInfo";

const DolarCripto = () => {
  const [dolarCripto, setDolarCripto] = useState<DatosMonedas | null>(null);

  useEffect(() => {
    async function obtenerDolarCripto() {
      try {
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/cripto");
        const datos: DatosMonedas = await respuesta.json();
        setDolarCripto(datos);
      } catch (error) {
        console.log("Error al obneter los datos de dolar cripto", error);
      }
    }
    obtenerDolarCripto();
  }, []);

  return (
    <div className="caja">
      <h2 className="titulo">
        DOLAR CRIPTO
        <IconoInfo
          id="tooltip-dolarCripto"
          texto="Cotización del dólar estadounidense
       en el mercado de criptomonedas. Es decir, el precio de compra y venta de dólares en el mercado de criptoactivos."
        />
      </h2>

      {dolarCripto ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong>$
              {dolarCripto.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong>$
              {dolarCripto.venta.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p>
            <strong>Diferencia: </strong> $
            {(dolarCripto.venta - dolarCripto.compra).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="actualizacion">
            <strong>Última actualización: </strong>
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
