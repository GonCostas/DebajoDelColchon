import { Tooltip } from "react-tooltip";
import { Info } from "lucide-react";

interface iconoInfoProps {
  texto: string;
  id: string
}

const IconoInfo: React.FC<iconoInfoProps> = ({ texto, id }) => {
  return (
    <div style={{ display: "inline-block" }}>
      {/*Iconó de "?" con tooltip*/}
      <Info
        data-tooltip-id={id}
        size={20}
        color="gray"
        style={{ cursor: "pointer" }}
      />

      <Tooltip
        id={id}
        place="top"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "5px",
          borderRadius: "4px",
          maxWidth: "250px",
          whiteSpace: "pre-linte",
          textAlign: "center",
        }}
      >
        {texto}
      </Tooltip>
    </div>
  );
};

export default IconoInfo;
