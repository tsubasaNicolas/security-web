import { useContext, useState } from "react";
import { getRegistrosEstadoColaboradores } from "../../apis/controlColaboradores";
import { getRegistrosEstadoLocales } from "../../apis/controlLocales";

import { ControlContext } from "./ControlContext";

export const useControl = () => {
  const context = useContext(ControlContext);
  if (context === undefined) {
    throw new Error("useControl must be used within a ControlContextProvider");
  }
  return context;
};

export const ControlContextProvider = ({ children }: any) => {
  //const [control, setControl] = useState([]);
  const [estadoColaboradores, setEstadoColaboradores] = useState([]);

  async function loadControlColaboradores() {
    const response = await getRegistrosEstadoColaboradores();
    setEstadoColaboradores(response.data);
  }

  const [estadoLocales, setEstadoLocales] = useState([]);

  async function loadControlLocales() {
    const response = await getRegistrosEstadoLocales();
    setEstadoLocales(response.data);
  }
  /* 
  const deleteTask = async (id: number) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task: ITask) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task: ITask) => {
    try {
      await createTaskRequest(task);
      // setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id: number) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id: number, newFields: ITask) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
 */
  return (
    <ControlContext.Provider
      value={{
        estadoColaboradores,
        loadControlColaboradores,
        estadoLocales,
        loadControlLocales,
      }}
    >
      {children}
    </ControlContext.Provider>
  );
};
