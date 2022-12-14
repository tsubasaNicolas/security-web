import React from "react";
import Navbar from "../components/Navbar";
import { UserAuth } from "../context/authcontext/AuthProvider";

export default function Documentation() {
  const { user }: any = UserAuth();
  return (
    <>
      {user?.displayName ? <Navbar /> : null}
      <div>
        <h1>Documentation</h1>
        <p>Ingresa con tu cuenta de google y explora los paneles</p>
      </div>
    </>
  );
}
