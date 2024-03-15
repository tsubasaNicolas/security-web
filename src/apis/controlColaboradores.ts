import axios from "axios";
import { IEstadoColaborador } from "../interfaces/IColaborador";

const url = "https://backend-security-production.up.railway.app/controlingreso";

export const getRegistrosEstadoColaboradores = async () =>
  await axios.get(url + "/colaboradores");

export const createRegistroColaboradorRequest = async (
  colaborador: IEstadoColaborador
) => await axios.post(url, colaborador);
