import { useEffect, useState } from "react";
import { DatosMonedas } from "../../services/types/DatosMonedas";
import IconoInfo from "../IconoInfo";
import "../../css/caja.css";

const Euro = () => {
  const [euro, setEuro] = useState<DatosMonedas| null>(null);

  useEffect(() => {
    async function obtenerDatosEuro() {
      try {
        const respuesta = await fetch(
          "https://dolarapi.com/v1/cotizaciones/eur"
        );
        const datos: DatosMonedas = await respuesta.json();
        setEuro(datos);
      } catch (error) {
        console.log("Error al obtener los datos", error);
      }
    }
    obtenerDatosEuro();
  }, []);

  return (
    <div className="caja">
      <h2 className="titulo">
        EURO
        <IconoInfo
          id="tooltip-dolarEuro"
          texto="Cotización del Real Brasileño en el mercado."
        />
      </h2>
      {euro ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong> $
              {euro.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong>$
              {euro.venta.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p>
            <strong>Diferencia: </strong>${" "}
            {(euro.venta - euro.compra).toLocaleString("es-Ar", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="actualizacion">
            <strong>Ultima actualización: </strong>
            {euro.fechaActualizacion
              ? new Date(euro.fechaActualizacion).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "Cargando..."}
          </p>
        </div>
      ) : (
        <p>Cargando datos</p>
      )}
    </div>
  );
};

export default Euro;
