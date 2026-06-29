/*import { Link } from "react-router-dom";*/
import { Link, Outlet } from "react-router-dom";

export function MundialApp() {
  const grupos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

  /*return (
    <div>
      {grupos.map((grupo) => (
        <Link to={`/grupo-detalle?grupo=${grupo}`}>
          <button>Ver Grupo {grupo.toUpperCase()}</button>
        </Link>
      ))}
    </div>
  );
}*/

  return (
    <div>
      <nav>
        {grupos.map((grupo) => (
          <Link key={grupo} to={`grupo-detalle?grupo=${grupo}`}>
            <button>Ver Grupo {grupo.toUpperCase()}</button>
          </Link>
        ))}
      </nav>

      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
