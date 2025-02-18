import { useEffect, useState } from "react";
import { DolarDatos } from "../../services/types/DolarDatos";
import IconoInfo from "../IconoInfo";
import "../../css/caja.css";

const DolarBolsa = () => {
  const [dolarBolsa, setDolarBolsa] = useState<DolarDatos | null>(null);

  useEffect(() => {
    async function obtenerDolarBolsa() {
      try {
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/bolsa");
        const datos: DolarDatos = await respuesta.json();
        setDolarBolsa(datos);
      } catch (error) {
        console.log("Error al obtener datos", error);
      }
    }
    obtenerDolarBolsa();
  }, []);

  return (
    <div className="caja">
      <h2 className="titulo">
        DOLAR BOLSA
        <IconoInfo
          id="tooltip-dolarBolsa"
          texto="Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como Dólar MEP."
        />
      </h2>
      {dolarBolsa ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong>$
              {dolarBolsa.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong> $
              {dolarBolsa.venta.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p className="direfencia">
            <strong>Diferencia: </strong>{" "}
            {(dolarBolsa.venta - dolarBolsa.compra).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="actualizacion">
            <strong>Última Atualización: </strong>
            {dolarBolsa.fechaActualizacion
              ? new Date(dolarBolsa.fechaActualizacion).toLocaleString(
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

export default DolarBolsa;
