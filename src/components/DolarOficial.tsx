import { useEffect, useState } from "react";
import { DolarOficialDatos } from "../services/types/DolarOficialDatos";
import "../css/dolarOficiial.css";
import IconoInfo from "./IconoInfo";

const DolarOficial = () => {
  const [oficial, setOficial] = useState<DolarOficialDatos | null>(null);
  
  useEffect(() => {
    async function obtenerDolarOficial() {
      try {
        const respuesta = await fetch(
          "https://dolarapi.com/v1/dolares/oficial"
        );
        const datos: DolarOficialDatos = await respuesta.json();
        setOficial(datos);

      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    obtenerDolarOficial();
  }, []);

  return (
    <div className="dolarOficial">
      <h2 className="titulo">
        DOLAR OFICIAL
        <IconoInfo
          id="tooltip-dolarOficial"
          texto="Cotización del dólar estadounidense en el mercado oficial. Es decir, el precio de compra y venta de dólares en bancos y casas de cambio autorizadas por el Banco Central de la República Argentina (BCRA)."
        />
      </h2>
      {oficial ? (
        <div>
          <div className="grupoUno">
            <p className="compraDolar">
              <strong>Compra: </strong> ${oficial.compra}
            </p>
            <p className="ventaDolar">
              <strong>Venta: </strong> ${oficial.venta}
            </p>
          </div>
            <p><strong>Diferencia:</strong> ${(oficial.venta - oficial.compra).toLocaleString("es-AR", {
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2,
            })}</p>

          <p className="actualizacionDolar">
            <strong>
              Última actualización:{String.fromCodePoint(0x23f3)}
            </strong>
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
