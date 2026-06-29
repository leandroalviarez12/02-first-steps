import { Link, useSearchParams } from "react-router-dom"
import {dataGrupos} from "../../data/data-grupos";

const getGroup = (group: string | undefined):  string[] => {
  const key = `Grupo ` + group as keyof typeof dataGrupos.grupos;
  return dataGrupos.grupos[key];
}
export const GrupoDetalle: React.FC<unknown> = () => {
  const [searchParams] = useSearchParams();

  const grupoParam = searchParams.get('grupo')?.toUpperCase();
  
  const grupo = getGroup(grupoParam);

const datosDelGrupo = grupo.map((pais) => ({ partido: pais }));
  
  return (
    <div>
      <h1>Partidos Grupo {grupoParam}</h1>

      <ul>
        {grupo.map((pais) => (
          <li>{pais}</li>
        ))}
      </ul>

      <Link to="/">
        <button>Ir a inicio</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Partido De</th>
            <th>Goles</th>
            <th>Duración Del Partido</th>
            <th>Equipo Rival</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Estadio</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {datosDelGrupo.map((item, index) => (
            <tr key={index}>
              <td>{item.partido}</td>
              <td>
                <input type="text" placeholder="Escribe aquí..." />
              </td>

              <td>
                <input type="text" placeholder="Escribe aquí..." />
              </td>

              <td>
                <input type="text" placeholder="Escribe aquí..." />
              </td>

              <td>
                <input type="text" placeholder="Escribe aquí..." />
              </td>

              <td>
                <input type="text" placeholder="Escribe aquí..." />
              </td>

              <td>
                <input type="text" placeholder="Escribe aquí..." />
              </td>

              <td>
                <input type="text" placeholder="Escribe aquí..." />
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );}