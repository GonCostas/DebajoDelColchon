import { useEffect, useState } from "react";
import { DolarDatos } from "../../services/types/DolarDatos";
import IconoInfo from "../IconoInfo";
import "../../css/caja.css"

const RealBrasil = () => {
  const [real, setReal] = useState<DolarDatos | null>(null);

  useEffect(() => {
    async function obtenerDatosReal() {
      try {
        const respuesta = await fetch(
          "https://dolarapi.com/v1/cotizaciones/brl"
        );
        const datos: DolarDatos = await respuesta.json();
        setReal(datos);
      } catch (error) {
        console.log("Error al obtener los datos", error);
      }
    }
    obtenerDatosReal();
  }, []);

  return (
    <div className="caja">
      <h2 className="titulo">
        REAL BRASILEÑO
        <IconoInfo
          id="tooltip-dolarEuro"
          texto="Cotización del Euro en el mercado."
        />
      </h2>
      {real ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong> ${(real.compra).toLocaleString("es-AR",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2, 
                }
              )}
            </p>
            <p className="venta">
              <strong>Venta: </strong>${(real.venta).toLocaleString("es-AR",{
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p >
            <strong>Diferencia: </strong>${" "}
            {(real.venta - real.compra).toLocaleString("es-Ar", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="actualizacion">
            <strong>Ultima actualización</strong>
            {real.fechaActualizacion
              ? new Date(real.fechaActualizacion).toLocaleDateString("es-ES", {
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

export default RealBrasil;
