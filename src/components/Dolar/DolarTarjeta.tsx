import { useEffect, useState } from "react";
import { DolarDatos } from "../../services/types/DolarDatos";
import "../../css/caja.css";
import IconoInfo from "../IconoInfo";

const DolarTarjeta = () => {
  const [dolarTarjeta, setDolarTarjeta] = useState<DolarDatos | null>(null);

  useEffect(() => {
    async function obtenerDolarTarjeta() {
      try {
        const respuesta = await fetch(
          "https://dolarapi.com/v1/dolares/tarjeta"
        );
        const datos: DolarDatos = await respuesta.json();
        setDolarTarjeta(datos);
      } catch (error) {
        console.log("Error al obtener datos del dolar tarjeta", error);
      }
    }

    obtenerDolarTarjeta();
  }, []);
  if (!dolarTarjeta) {
    <p>Cargando datos...</p>;
  }

  return (
    <div className="caja">
      <h2 className="titulo">
        {" "}
        DOLAR TARJETA
        <IconoInfo
          id="tooltip-dolarTarjeta"
          texto="Es el valor de la cotización del dólar estadounidense en el mercado oficial, más el impuesto a las ganancias (30%)."
        />
      </h2>
      {dolarTarjeta ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong>$
              {dolarTarjeta.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong>$
              {dolarTarjeta.venta.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p>
            <strong>Diferencia: </strong>$
            {(dolarTarjeta.venta - dolarTarjeta.compra).toLocaleString(
              "es-AR",
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}
          </p>
          <p className="actualizacion">
            <strong>Última actualización: </strong>
            {dolarTarjeta.fechaActualizacion
              ? new Date(dolarTarjeta.fechaActualizacion).toLocaleString(
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

export default DolarTarjeta;
