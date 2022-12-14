//import { useTasks } from "../context/taskscontext/TaskProvider";
import { useNavigate } from "react-router-dom";
import { IColaborador } from "../interfaces/IColaborador";
//import { IColaborador } from "../interfaces/IColaborador";
import { FaTrashAlt, FaUserEdit, FaPhone } from "react-icons/fa";
import { deleteColaboradorRequest } from "../apis/colaboradores.api";

function ColaboradorCard({ colaborador }: any) {
  // const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  /* const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

*/

  const deleteColaborador = async (id: number) => {
    try {
      //  const response =
      await deleteColaboradorRequest(id);
      navigate("/colaboradores");

      // setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-sky-800 text-white rounded-md p-4 hover:bg-sky-600 cursor-pointer">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{colaborador.nombre}</h2>
        {/*     <span>{task.done == 1 ? "️✅️" : "❌"}</span> */}
        <div>
          <button
            className="bg-slate-300 px-2 py-1 text-black mr-1"
            onClick={() => {
              deleteColaborador(colaborador.id);
              navigate("/controlingreso/colaboradores");
            }}
          >
            <FaTrashAlt />
          </button>
          <button
            className="bg-slate-300 px-2 py-1 text-black"
            onClick={() => navigate(`/editar-colaborador/${colaborador.id}`)}
          >
            <FaUserEdit />
          </button>
        </div>
      </header>
      <p className="text-xs">{colaborador.id}</p>

      {/*    <span>{task.createAt}</span> */}
      <div className="text-center mt-2">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaPhone /> {" - "} {colaborador.telefono}
        </p>
      </div>
    </div>
  );
}

export default ColaboradorCard;
