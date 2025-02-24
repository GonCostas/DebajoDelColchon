
import { useEffect, useState } from "react";
import { DatosMonedas } from "../../services/types/DatosMonedas";
import IconoInfo from "../IconoInfo";
import "../../css/caja.css";

const PesoChileno= () => {
  const [pesoChileno, setPesoChileno] = useState<DatosMonedas| null>(null);

  useEffect(() => {
    async function obtenerDatosPesoChileno() {
      try {
        const respuesta = await fetch(
          "https://dolarapi.com/v1/cotizaciones/eur"
        );
        const datos: DatosMonedas = await respuesta.json();
        setPesoChileno(datos);
      } catch (error) {
        console.log("Error al obtener los datos", error);
      }
    }
    obtenerDatosPesoChileno();
  }, []);

  return (
    <div className="caja">
      <h2 className="titulo">
        PESO CHILENO
        <IconoInfo
          id="tooltip-dolarPesoChileno"
          texto="Cotización del Peso Chileno en el mundo."
        />
      </h2>
      {pesoChileno ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong> $
              {pesoChileno.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong>$
              {pesoChileno.venta.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p>
            <strong>Diferencia: </strong>${" "}
            {(pesoChileno.venta - pesoChileno.compra).toLocaleString("es-Ar", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="actualizacion">
            <strong>Ultima actualización: </strong>
            {pesoChileno.fechaActualizacion
              ? new Date(pesoChileno.fechaActualizacion).toLocaleDateString("es-ES", {
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

export default PesoChileno;
