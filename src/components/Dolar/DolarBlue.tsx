import { useEffect, useState } from "react";
import { DolarDatos } from "../../services/types/DolarDatos";
import "../../css/caja.css";
import IconoInfo from "../IconoInfo";

const DolarBlue = () => {
  const [dolarBlue, setDolarBlue] = useState<DolarDatos | null>(null);

  useEffect(() => {
    async function obtenerDatosDolarBlue() {
      try {
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/blue");
        const datos: DolarDatos = await respuesta.json();
        setDolarBlue(datos);
      } catch (error) {
        console.log("Error al obtener los datos", error);
      }
    }
    obtenerDatosDolarBlue();
  }, []);

  if (!dolarBlue) {
    <p>Cargando DolarBlue...</p>;
  }
  return (
    <div className="caja">
      <h2 className="titulo">
        DOLAR BLUE
        <IconoInfo
          id="tooltip-dolarBlue"
          texto="Cotización del dólar estadounidense en el mercado paralelo o informal. Es decir, el precio de compra y venta de dólares en cuevas o casas de cambio no autorizadas por el Banco Central de la República Argentina (BCRA)."
        />
      </h2>
      {dolarBlue ? (
        <div>
          <div className="grupo">
            <p className="compra">
              <strong>Compra: </strong>$
              {dolarBlue.compra.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="venta">
              <strong>Venta: </strong>${(dolarBlue.venta).toLocaleString("es-AR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <p>
            <strong>Diferencia: </strong> $
            {(dolarBlue.venta - dolarBlue.compra).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="actualizacion">
            <strong>
              Última actualización: {String.fromCodePoint(0x23f3)}{" "}
            </strong>
            {dolarBlue.fechaActualizacion
              ? new Date(dolarBlue.fechaActualizacion).toLocaleString("es-ES", {
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
export default DolarBlue;
