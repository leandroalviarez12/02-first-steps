import { useState, type ReactElement } from "react"; // 1. Importamos ReactElement para los tipos
import { GrupoA } from "./Grupos-Mundial/GrupoA";
import { GrupoB } from "./Grupos-Mundial/GrupoB";
import { GrupoC } from "./Grupos-Mundial/GrupoC";
import { GrupoD } from "./Grupos-Mundial/GrupoD";
import { GrupoE } from "./Grupos-Mundial/GrupoE";
import { GrupoF } from "./Grupos-Mundial/GrupoF";
import { GrupoG } from "./Grupos-Mundial/GrupoG";
import { GrupoH } from "./Grupos-Mundial/GrupoH";
import { GrupoI } from "./Grupos-Mundial/GrupoI";
import { GrupoJ } from "./Grupos-Mundial/GrupoJ";

export function MundialApp() {
  const [vista, setVista] = useState<string>("inicio"); // 2. Indicamos que el estado es un string

  // 3. Definimos el objeto con tipos estrictos de TSX
  const contenidoGrupos: Record<string, ReactElement> = {
    grupoA: <GrupoA />,
    grupoB: <GrupoB />,
    grupoC: <GrupoC />,
    grupoD: <GrupoD />,
    grupoE: <GrupoE />,
    grupoF: <GrupoF />,
    grupoG: <GrupoG />,
    grupoH: <GrupoH />,
    grupoI: <GrupoI />,
    grupoJ: <GrupoJ />,
  };

  return (
    <div>
      {vista === "inicio" ? (
        <div>
          <button onClick={() => setVista("grupoA")}>Ver Grupo A</button>
          <button onClick={() => setVista("grupoB")}>Ver Grupo B</button>
          <button onClick={() => setVista("grupoC")}>Ver Grupo C</button>
          <button onClick={() => setVista("grupoD")}>Ver Grupo D</button>
          <button onClick={() => setVista("grupoE")}>Ver Grupo E</button>
          <button onClick={() => setVista("grupoF")}>Ver Grupo F</button>
          <button onClick={() => setVista("grupoG")}>Ver Grupo G</button>
          <button onClick={() => setVista("grupoH")}>Ver Grupo H</button>
          <button onClick={() => setVista("grupoI")}>Ver Grupo I</button>
          <button onClick={() => setVista("grupoJ")}>Ver Grupo J</button>
        </div>
      ) : (
        <div>
          {/* 4. Ahora TypeScript sabe exactamente qué es esto */}
          {contenidoGrupos[vista]}

          <button onClick={() => setVista("inicio")}>Volver al inicio</button>
        </div>
      )}
    </div>
  );
}
