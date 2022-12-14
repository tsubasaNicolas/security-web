import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/authcontext/AuthProvider";

const Protected = ({ children }: any) => {
  const { user }: any = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protected;
