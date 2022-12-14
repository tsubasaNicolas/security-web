import React, { useEffect, useState } from "react";

import EstadoLocalCard from "../../components/EstadoLocalesCard";
import Navbar from "../../components/Navbar";
import { useControl } from "../../context/controlcontext/ControlProvider";
//import ColaboradorCard from "../components/ColaboradorCard";
import { IEstadoLocal } from "../../interfaces/ILocal";

function ControlLocales() {
  const { estadoLocales, loadControlLocales }: any = useControl();

  useEffect(() => {
    loadControlLocales();
  }, []);

  function renderMain() {
    if (estadoLocales.length === 0) return <h1>No existen locales aún</h1>;
    return estadoLocales.map((local: IEstadoLocal) => (
      <EstadoLocalCard local={local} key={local.id_local} />
    ));
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl py-3 text-sky-700 font-bold text-center">
          Estado Locales
        </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {renderMain()}
        </div>
      </div>
    </>
  );
}

export default ControlLocales;
