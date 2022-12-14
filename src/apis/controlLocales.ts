import axios from "axios";
import { IEstadoLocal } from "../interfaces/ILocal";

const url = "https://backend-security.herokuapp.com/cierre";
export const getRegistrosEstadoLocales = async () =>
  await axios.get(url + "/locales");

export const createRegistroLocalRequest = async (local: IEstadoLocal) =>
  await axios.post(url, local);
