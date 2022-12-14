import axios from "axios";
import { IEstadoColaborador } from "../interfaces/IColaborador";

const url = "https://backend-security.herokuapp.com/controlingreso";

export const getRegistrosEstadoColaboradores = async () =>
  await axios.get(url + "/colaboradores");

export const createRegistroColaboradorRequest = async (
  colaborador: IEstadoColaborador
) => await axios.post(url, colaborador);
