import axios from "axios";
import { IColaborador } from "../interfaces/IColaborador";

const url = "https://backend-security.herokuapp.com/colaboradores";
export const getColaboradoresRequest = async () => await axios.get(url);

export const createColaboradorRequest = async (colaborador: IColaborador) =>
  await axios.post(url, colaborador);

export const getColaboradorRequest = async (id: number) =>
  await axios.get(`${url}/${id}`);

export const updateColaboradorRequest = async (
  id: number,
  newFields: IColaborador
) => await axios.put(`${url}/${id}`, newFields);

export const deleteColaboradorRequest = async (id: number) =>
  await axios.delete(`${url}/${id}`);

/* 
export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:3000/tasks/${id}`);




export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:3000/tasks/${id}`, {
    done,
  });
 */
