import React, { useEffect, useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getLocales } from "../../apis/locales.api";
import ButtonAdd from "../../components/ButtonAdd";
import LocalCard from "../../components/LocalCard";
import Navbar from "../../components/Navbar";
import { ILocal } from "../../interfaces/ILocal";

function Locales() {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    async function loadLocales() {
      const response = await getLocales();
      setLocales(response.data);
    }
    loadLocales();
    console.log(locales);
  }, []);

  function renderMain() {
    if (locales.length === 0) return <h1>No existen locales aún</h1>;
    return locales.map((local: ILocal) => (
      <LocalCard local={local} key={local.id} />
    ));
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl py-3 text-sky-700 font-bold text-center">
          Locales
        </h1>

        <ButtonAdd title="Nuevo Local" url="/nuevo-local" />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {renderMain()}
        </div>
      </div>
    </>
  );
}

export default Locales;
