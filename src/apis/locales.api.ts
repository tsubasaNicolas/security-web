import axios from "axios";
import { ILocal } from "../interfaces/ILocal";

const url = "https://backend-security.herokuapp.com/locales";
export const getLocales = async () => await axios.get(url);

export const createLocalRequest = async (local: ILocal) =>
  await axios.post(url, local);

export const getLocalRequest = async (id: number) =>
  await axios.get(`${url}/${id}`);

export const updateLocalRequest = async (id: number, newFields: ILocal) =>
  await axios.put(`${url}/${id}`, newFields);

export const deleteLocalRequest = async (id: number) =>
  await axios.delete(`${url}/${id}`);
/* 


export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:3000/tasks/${id}`);


export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:3000/tasks/${id}`, {
    done,
  });
 */
