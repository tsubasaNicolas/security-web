import { useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../../apis/tasks.api";
import { ITask } from "../../interfaces/ITask";

import { TaskContext } from "./TaskContext";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

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

  const toggleTaskDone = async (id: number) => {
    try {
      const taskFound: any = tasks.find((task: ITask) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
