import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getColaboradoresRequest } from "../../apis/colaboradores.api";
import ColaboradorCard from "../../components/ColaboradorCard";
import Navbar from "../../components/Navbar";
import { IColaborador } from "../../interfaces/IColaborador";
import { FaPlusSquare } from "react-icons/fa";
import ButtonAdd from "../../components/ButtonAdd";

function Colaboradores() {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    async function loadColaboradores() {
      const response = await getColaboradoresRequest();
      setColaboradores(response.data);
    }
    loadColaboradores();
    console.log(colaboradores);
  }, []);

  function renderMain() {
    if (colaboradores.length === 0)
      return <h1>No existen colaboradores aún</h1>;
    return colaboradores.map((colaborador: IColaborador) => (
      <ColaboradorCard colaborador={colaborador} key={colaborador.id} />
    ));
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl py-3 text-sky-700 font-bold text-center">
          Colaboradores
        </h1>

        <ButtonAdd title="Nuevo Colaborador" url="/nuevo-colaborador" />

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {renderMain()}
        </div>
      </div>
    </>
  );
}

export default Colaboradores;
