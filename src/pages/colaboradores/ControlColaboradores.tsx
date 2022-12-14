import React, { useEffect, useState } from "react";
import EstadoColaboradorCard from "../../components/EstadoColaboradoresCard";
import Navbar from "../../components/Navbar";
import { useControl } from "../../context/controlcontext/ControlProvider";
//import ColaboradorCard from "../components/ColaboradorCard";
import { IEstadoColaborador } from "../../interfaces/IColaborador";

function ControlColaboradores() {
  const { estadoColaboradores, loadControlColaboradores }: any = useControl();

  useEffect(() => {
    loadControlColaboradores();
  }, []);
  //  const [estadoColaboradores, setEstadoColaboradores] = useState([]);
  /* 
  useEffect(() => {
    async function loadEstadoColaboradores() {
      const response = await getRegistrosEstadoColaboradores();
      setEstadoColaboradores(response.data);
    }
    loadEstadoColaboradores();
    console.log(estadoColaboradores);
  }, []); */

  function renderMain() {
    if (estadoColaboradores.length === 0)
      return <h1>No existen colaboradores aún</h1>;
    return estadoColaboradores.map((colaborador: IEstadoColaborador) => (
      <EstadoColaboradorCard
        colaborador={colaborador}
        key={colaborador.id_colaborador}
      />
    ));
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl py-3 text-sky-700 font-bold text-center">
          Estado Colaboradores
        </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {renderMain()}
        </div>
      </div>
    </>
  );
}

export default ControlColaboradores;
