import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/authcontext/AuthProvider";
function Home() {
  const { user, logOut }: any = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {user?.displayName ? <Navbar /> : null}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <img
            src="https://image.freepik.com/vector-gratis/icono-logotipo-seguridad-aislado_61778-51.jpg"
            alt="logo_principal"
            width="200px"
            height="200px"
          />
        </div>
        {user?.displayName ? (
          <button
            onClick={handleSignOut}
            className="bg-teal-900 px-2 text-white shadow-xl rounded"
          >
            Salir
          </button>
        ) : (
          <Link to="/signin" className="bg-pink-900 px-2 py-1 text-white">
            Entrar
          </Link>
        )}
      </div>
    </>
  );
}

export default Home;
