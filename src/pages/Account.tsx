import React from "react";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/authcontext/AuthProvider";

const Account = () => {
  const { logOut, user }: any = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="w-[300px] m-auto">
        <h1 className="text-center text-2xl font-bold pt-12">Cuenta</h1>
        <div>
          <img
            src={user?.photoURL}
            alt="foto perfil"
            style={{ width: 100, height: 100 }}
          />
          <p>Bienvenido, {user?.displayName}</p>
        </div>
        <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
          Salir
        </button>
      </div>
    </>
  );
};

export default Account;
