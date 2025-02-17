import { useEffect, useState } from "react";
import { DolarTarjetaDatos } from "../services/types/DolarTarjetaDatos";
import "../css/dolarTarjeta.css"
import IconoInfo from "./IconoInfo";

const DolarTarjeta = () => {
  const [dolarTarjeta, setDolarTarjeta] = useState<DolarTarjetaDatos | null>(
    null
  );

  useEffect(() => {
    async function obtenerDolarTarjeta() {
      try {
        const respuesta = await fetch(
          "https://dolarapi.com/v1/dolares/tarjeta"
        );
        const datos: DolarTarjetaDatos = await respuesta.json();
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
    <div className="dolarTarjeta">
      <h2 className="Titulo"> DOLAR TARJETA
        <IconoInfo id="tooltip-dolarTarjeta" texto="Es el valor de la cotización del dólar estadounidense en el mercado oficial, más el impuesto a las ganancias (30%)."/>
      </h2>
      {dolarTarjeta ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong>${dolarTarjeta.compra}
            </p>
            <p className="venta">
              <strong>Venta: </strong>${dolarTarjeta.venta}
            </p>
          </div>

          <p className="fecha">
            <strong>Ultima actualizacion: </strong>
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
