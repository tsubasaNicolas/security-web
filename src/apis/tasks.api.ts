import axios from "axios";

interface ITask {
  title: string;
  description: string;
}

const url = "https://backend-security-production.up.railway.app/tasks";

export const getTasksRequest = async () => await axios.get(url);

export const createTaskRequest = async (task: ITask) =>
  await axios.post(url, task);

export const deleteTaskRequest = async (id: number) =>
  await axios.delete(`${url}/${id}`);

export const getTaskRequest = async (id: number) =>
  await axios.get(`${url}/${id}`);

export const updateTaskRequest = async (id: number, newFields: ITask) =>
  await axios.put(`${url}/${id}`, newFields);

export const toggleTaskDoneRequest = async (id: number, done: boolean) =>
  await axios.put(`${url}/${id}`, {
    done,
  });
