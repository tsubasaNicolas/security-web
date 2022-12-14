export interface ILocal {
  id?: number;
  local: string;
  encargado: string;
  telefono: number;
  ubicacion: string;
  estado: string;
}

export interface IEstadoLocal {
  id?: number;
  id_local: number;
  cierre?: number;
  estado: string;
  fecha_hora?: string | null;
  local?: string;
}
