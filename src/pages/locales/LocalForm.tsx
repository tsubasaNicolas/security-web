import { Form, Formik } from "formik";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  createLocalRequest,
  getLocalRequest,
  updateLocalRequest,
} from "../../apis/locales.api";
import { ILocal } from "../../interfaces/ILocal";
import Navbar from "../../components/Navbar";

function LocalForm() {
  const createLocal = async (local: ILocal) => {
    try {
      await createLocalRequest(local);
      // setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getLocal = async (id: number) => {
    try {
      const response = await getLocalRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateLocal = async (id: number, newFields: ILocal) => {
    try {
      const response = await updateLocalRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const [local, setLocal] = useState({
    local: "",
    encargado: "",
    telefono: "",
    ubicacion: "",
    estado: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadLocal = async () => {
      if (params.id) {
        const local = await getLocal(Number(params.id));
        console.log(local);
        setLocal({
          local: local.local,
          encargado: local.encargado,
          telefono: local.telefono,
          ubicacion: local.ubicacion,
          estado: local.estado,
        });
      }
    };
    loadLocal();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Formik
          initialValues={local}
          enableReinitialize={true}
          onSubmit={async (values: any, actions) => {
            console.log(values);
            if (params.id) {
              await updateLocal(Number(params.id), values);
            } else {
              await createLocal(values);
            }
            navigate("/locales");
            setLocal({
              local: "",
              encargado: "",
              telefono: "",
              ubicacion: "",
              estado: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
              <h1 className="text-xl font-bold uppercase text-center">
                {params.id ? "Editar Local" : "Nuevo Local"}
              </h1>
              <label className="block">nombre</label>
              <input
                type="text"
                name="local"
                placeholder="Ingresa un nombre de local"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.local}
              />
              <label className="block">encargado</label>
              <input
                type="text"
                name="encargado"
                placeholder="Ingresa un nombre de encargado"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.encargado}
              />

              <label className="block">Teléfono</label>
              <input
                type="phone"
                name="telefono"
                placeholder="Ingresa un teléfono"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.telefono}
              />
              <label className="block">ubicación</label>
              <input
                type="text"
                name="ubicacion"
                placeholder="Ingresa una ubicación"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.ubicacion}
              />

              <label className="block">estado</label>
              <input
                type="text"
                name="estado"
                placeholder="Ingresa un estado"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.estado}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-indigo-500 px-2 py-1 mt-2 text-white w-full rounded-md"
              >
                {params.id
                  ? isSubmitting
                    ? "Editando..."
                    : "Editar"
                  : isSubmitting
                  ? "Guardando..."
                  : "Guardar"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center py-2">
          <button
            className="text-blue-500 hover:text-blue-900 hover:font-bold"
            onClick={() => navigate("/locales")}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
}

export default LocalForm;
