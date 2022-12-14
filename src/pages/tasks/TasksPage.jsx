import { useEffect } from "react";
import TaskCard from "../../components/TaskCard";
import { useTasks } from "../../context/taskscontext/TaskProvider";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import ButtonAdd from "../../components/ButtonAdd";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No hay tareas aún</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl py-3 text-sky-700 font-bold text-center">
          Tareas
        </h1>

        <ButtonAdd title="Nueva tarea" url="/nueva-tarea" />

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {renderMain()}
        </div>
      </div>
    </>
  );
}

export default TasksPage;
