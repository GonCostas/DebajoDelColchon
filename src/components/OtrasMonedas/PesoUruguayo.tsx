import { useEffect, useState } from "react";
import { DatosMonedas } from "../../services/types/DatosMonedas";
import IconoInfo from "../IconoInfo";
import "../../css/caja.css";

const PesoUruguayo = () => {
  const [peso, setPeso] = useState<DatosMonedas | null>(null);

  useEffect(() => {
    async function obtenerDatosPeso() {
      try {
        const respuesta = await fetch(
          "https://dolarapi.com/v1/cotizaciones/brl"
        );
        const datos: DatosMonedas= await respuesta.json();
        setPeso(datos);
      } catch (error) {
        console.log("Error al obtener los datos", error);
      }
    }
    obtenerDatosPeso();
  }, []);

  return (
    <div className="caja">
      <h2 className="titulo">
        PESO URUGUAYO
        <IconoInfo
          id="tooltip-dolarEuro"
          texto="Cotización del peso Uruguayo"
        />
      </h2>
      {peso ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong> $
              {peso.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong>$
              {peso.venta.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p>
            <strong>Diferencia: </strong>${" "}
            {(peso.venta - peso.compra).toLocaleString("es-Ar", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="actualizacion">
            <strong>Ultima actualización: </strong>
            {peso.fechaActualizacion
              ? new Date(peso.fechaActualizacion).toLocaleDateString("es-ES", {
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

export default PesoUruguayo;
