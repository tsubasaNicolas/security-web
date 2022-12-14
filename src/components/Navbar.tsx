import { Link } from "react-router-dom";
import { UserAuth } from "../context/authcontext/AuthProvider";

function Navbar() {
  const { user, logOut }: any = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-wrap gap-2 align-center">
      {/*    <Link to="/" className="text-white font-bold">
        <h1>Control Instalaciones</h1>
      </Link>
 */}
      {/*    <ul className="flex gap-x-1"> */}

      <Link
        to="/colaboradores"
        className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-500"
      >
        Colaboradores
      </Link>

      <Link
        to="/locales"
        className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-500"
      >
        Locales
      </Link>

      <Link
        to="/controlingreso/colaboradores"
        className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-500"
      >
        Ingreso Colaboradores
      </Link>

      <Link
        to="/controlcierre/locales"
        className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-500"
      >
        Cierre Locales
      </Link>

      <Link
        to="/tareas"
        className="bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-500"
      >
        Tareas
      </Link>

      {/*   <li>  <Link to="/" className="bg-slate-200 px-2 py-1">
            Inicio
          </Link>
        </li> */}
      {/*     <li>
          <Link to="/new" className="bg-teal-200 px-2 py-1">
            Create task
          </Link>
        </li> */}
      {/*   <li>
          {user?.displayName ? (
            <button
              onClick={handleSignOut}
              className="bg-teal-900 px-2 text-white"
            >
              Salir
            </button>
          ) : (
            <Link to="/signin" className="bg-pink-900 px-2 py-1 text-white">
              Entrar
            </Link>
          )}
        </li> */}
      {/*       </ul> */}
    </div>
  );
}

export default Navbar;
