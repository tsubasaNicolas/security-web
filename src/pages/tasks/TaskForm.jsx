import { Form, Formik } from "formik";
import { useTasks } from "../../context/taskscontext/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            console.log(values);
            if (params.id) {
              await updateTask(params.id, values);
            } else {
              await createTask(values);
            }
            navigate("/tareas");
            setTask({
              title: "",
              description: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
              <h1 className="text-xl font-bold uppercase text-center">
                {params.id ? "Editar Tarea" : "Nueva Tarea"}
              </h1>
              <label className="block">Título</label>
              <input
                type="text"
                name="title"
                placeholder="Escribe un título"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.title}
              />

              <label className="block">Descripción</label>
              <textarea
                name="description"
                rows="3"
                placeholder="Escribe una descripción"
                onChange={handleChange}
                className="px-2 py-1 rounded-sm w-full"
                value={values.description}
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="flex justify-center py-2">
          <button
            className="text-blue-500 hover:text-blue-900 hover:font-bold"
            onClick={() => navigate("/tareas")}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskForm;
