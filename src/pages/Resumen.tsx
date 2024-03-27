//import Navbar from "../components/Navbar";
import React, { useRef, useState, useEffect } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useControl } from "../context/controlcontext/ControlProvider";
import EstadoColaboradorCard from "../components/EstadoColaboradoresCard";
import { IEstadoColaborador } from "../interfaces/IColaborador";
const Resumen = () => {
  const tableRef = useRef(null);
  const { estadoColaboradores, loadControlColaboradores }: any = useControl();

  useEffect(() => {
    loadControlColaboradores();
  }, []);

  function renderMain() {
    if (estadoColaboradores.length === 0)
      return <h1>No existen colaboradores aún</h1>;
    return estadoColaboradores.map((colaborador: IEstadoColaborador) => (
      <tr key={colaborador.id_colaborador}>
        <td>{colaborador.id}</td>
        <td>{colaborador.id_colaborador}</td>
        <td>{colaborador.ingreso}</td>
        <td>{colaborador.estado}</td>
        <td>{colaborador.fecha_hora}</td>
      </tr>
    ));
  }

  return (
    <div>
      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
      >
        <button> Export excel </button>
      </DownloadTableExcel>

      <table ref={tableRef}>
        <tbody>
          <tr>
            <th>id</th>
            <th>id_colaborador</th>
            <th>ingreso</th>
            <th>estado</th>
            <th>fecha_hora</th>
          </tr>
          {renderMain()}
        </tbody>
      </table>
    </div>
  );
};

export default Resumen;
