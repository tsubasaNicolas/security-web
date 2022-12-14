//import { useTasks } from "../context/taskscontext/TaskProvider";
import { useNavigate } from "react-router-dom";
import { ILocal } from "../interfaces/ILocal";
//import { IColaborador } from "../interfaces/IColaborador";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { deleteLocalRequest } from "../apis/locales.api";

function LocalCard({ local }: any) {
  // const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  /* const handleDone = async () => {
    await toggleTaskDone(task.id);
  };
*/

  const deleteLocal = async (id: number) => {
    try {
      //  const response =
      await deleteLocalRequest(id);
      // setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-cyan-800 text-white rounded-md p-4  hover:bg-cyan-600 cursor-pointer">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{local.local}</h2>
        {/*     <span>{task.done == 1 ? "️✅️" : "❌"}</span> */}
        <div>
          <button
            className="bg-slate-300 px-2 py-1 text-black mr-1"
            onClick={() => deleteLocal(local.id)}
          >
            <FaTrashAlt />
          </button>
          <button
            className="bg-slate-300 px-2 py-1 text-black"
            onClick={() => navigate(`/editar-local/${local.id}`)}
          >
            <FaEdit />
          </button>
        </div>
      </header>
      <p className="text-xs">{local.telefono}</p>

      {/*    <span>{task.createAt}</span> */}
      <div className="text-center mt-2">
        <h3>Encargado: {local.encargado}</h3>
      </div>
    </div>
  );
}

export default LocalCard;
