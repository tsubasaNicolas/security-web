import { Form, Formik } from "formik";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  createColaboradorRequest,
  getColaboradorRequest,
  updateColaboradorRequest,
} from "../../apis/colaboradores.api";
import { IColaborador } from "../../interfaces/IColaborador";
import Navbar from "../../components/Navbar";

function ColaboradorForm() {
  const createColaborador = async (colaborador: IColaborador) => {
    try {
      await createColaboradorRequest(colaborador);
      // setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getColaborador = async (id: number) => {
    try {
      const response = await getColaboradorRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateColaborador = async (id: number, newFields: IColaborador) => {
    try {
      const response = await updateColaboradorRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const [colaborador, setColaborador] = useState({
    nombre: "",
    telefono: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadColaborador = async () => {
      if (params.id) {
        const colaborador = await getColaborador(Number(params.id));
        console.log(colaborador);
        setColaborador({
          nombre: colaborador.nombre,
          telefono: colaborador.telefono,
        });
      }
    };
    loadColaborador();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Formik
          initialValues={colaborador}
          enableReinitialize={true}
          onSubmit={async (values: any, actions) => {
            console.log(values);
            if (params.id) {
              await updateColaborador(Number(params.id), values);
            } else {
              await createColaborador(values);
            }
            navigate("/colaboradores");
            setColaborador({
              nombre: "",
              telefono: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
              <h1 className="text-xl font-bold uppercase text-center">
                {params.id ? "Editar Colaborador" : "Nuevo Colaborador"}
              </h1>
              <label className="block">nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingresa un nombre"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.nombre}
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
            onClick={() => navigate("/colaboradores")}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
}

export default ColaboradorForm;
