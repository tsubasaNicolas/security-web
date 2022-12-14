export interface IColaborador {
  id?: number;
  nombre: string;
  telefono: number;
}

export interface IEstadoColaborador {
  id?: number;
  id_colaborador: number;
  ingreso?: number;
  estado: string;
  fecha_hora?: string | null;
  nombre?: string;
}
