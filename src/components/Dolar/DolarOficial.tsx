import { useEffect, useState } from "react";
import { DolarDatos } from "../../services/types/DolarDatos";
import "../../css/caja.css";
import IconoInfo from "../IconoInfo";

const DolarOficial = () => {
  const [oficial, setOficial] = useState<DolarDatos | null>(null);

  useEffect(() => {
    async function obtenerDolarOficial() {
      try {
        const respuesta = await fetch(
          "https://dolarapi.com/v1/dolares/oficial"
        );
        const datos: DolarDatos = await respuesta.json();
        setOficial(datos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    obtenerDolarOficial();
  }, []);

  return (
    <div className="caja">
      <h2 className="titulo">
        DOLAR OFICIAL
        <IconoInfo
          id="tooltip-dolarOficial"
          texto="Cotización del dólar estadounidense en el mercado oficial. Es decir, el precio de compra y venta de dólares en bancos y casas de cambio autorizadas por el Banco Central de la República Argentina (BCRA)."
        />
      </h2>
      {oficial ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong> $
              {oficial.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong> $
              {oficial.venta.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p>
            <strong>Diferencia:</strong> $
            {(oficial.venta - oficial.compra).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>

          <p className="actualizacion">
            <strong>Última actualización:{String.fromCodePoint(0x23f3)}</strong>
            {oficial.fechaActualizacion
              ? new Date(oficial.fechaActualizacion).toLocaleString("es-ES", {
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
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default DolarOficial;
