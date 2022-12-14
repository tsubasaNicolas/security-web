import { useTasks } from "../context/taskscontext/TaskProvider";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { FC } from "react";

const TaskCard = ({ task }:any) => {
  const { deleteTask, toggleTaskDone, loadTasks }:any = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
    loadTasks();
  };

  return (
    <div
      className={
        task.done === 1
          ? "bg-teal-700 text-white rounded-md p-4"
          : "bg-red-900 text-white rounded-md p-4"
      }
    >
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      {/*  <span>{dayjs(task.createAt).format("DD/MM/YYYY HH:mm")}</span> */}
      <div className="flex gap-x-1 mt-6">
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/tarea/editar/${task.id}`)}
        >
          Editar
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => handleDone()}
        >
          {task.done == 1 ? "Cambiar a ️Pendiente" : "Cambiar a Realizada"}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
