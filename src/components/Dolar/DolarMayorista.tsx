import { useEffect, useState } from "react";
import { DatosMonedas } from "../../services/types/DatosMonedas";
import IconoInfo from "../IconoInfo";
import "../../css/caja.css";

const DolarMayorista = () => {
  const [dolarMayor, setDolarMayor] = useState<DatosMonedas | null>(null);

  useEffect(() => {
    async function obtenerDolarMayor() {
      try {
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/cripto");
        const datos: DatosMonedas = await respuesta.json();
        setDolarMayor(datos);
      } catch (error) {
        console.log("Error al obneter los datos de dolar cripto", error);
      }
    }
    obtenerDolarMayor();
  }, []);

  return (
    <div className="caja">
      <h2 className="titulo">
        DOLAR MAYORISTA
        <IconoInfo
          id="tooltip-dolarMayor"
          texto="Cotización del dólar estadounidense en el mercado mayorista. Es decir, el precio de compra y venta de dólares en el mercado interbancario."
        />
      </h2>

      {dolarMayor ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong>$
              {dolarMayor.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong>$
              {dolarMayor.venta.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p>
            <strong>Diferencia: </strong> $
            {(dolarMayor.venta - dolarMayor.compra).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="actualizacion">
            <strong>Última actualización: </strong>
            {dolarMayor.fechaActualizacion
              ? new Date(dolarMayor.fechaActualizacion).toLocaleString(
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

export default DolarMayorista;
