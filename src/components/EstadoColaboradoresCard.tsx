//import { useTasks } from "../context/taskscontext/TaskProvider";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { createRegistroColaboradorRequest } from "../apis/controlColaboradores";
import "dayjs/locale/es";
import { useControl } from "../context/controlcontext/ControlProvider";
import Swal from "sweetalert2";

function EstadoColaboradorCard({ colaborador }: any) {
  const { loadControlColaboradores }: any = useControl();
  const navigate = useNavigate();

  const changeEstado = async () => {
    await createRegistroColaboradorRequest({
      id_colaborador: colaborador.id_colaborador,
      ingreso: colaborador.ingreso === 0 ? 1 : 0,
      estado: colaborador.estado === "Activo" ? "Descanso" : "Activo",
      fecha_hora: dayjs().format(),
    });
    loadControlColaboradores();
  };

  return (
    <div
      className={
        colaborador.estado === "Activo"
          ? "bg-emerald-600 text-white rounded-md p-4  hover:bg-emerald-400 cursor-pointer"
          : "bg-zinc-600 text-white rounded-md p-4  hover:bg-zinc-400 cursor-pointer"
      }
    >
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{colaborador.nombre}</h2>
        {/*     <span>{task.done == 1 ? "️✅️" : "❌"}</span> */}

        <h4
          // className="bg-slate-300 px-2 py-1 text-black mr-1"
          className={
            colaborador.estado == "Descanso"
              ? "bg-red-300 px-2 py-1 text-black mr-1 rounded-md"
              : "bg-green-300 px-2 py-1 text-black mr-1 rounded-md"
          }
          //  onClick={() => deleteTask(task.id)}
        >
          {colaborador.estado}
        </h4>

        {/* <span className="text-xs">{colaborador.id_colaborador}</span> */}
      </header>

      {/*    <span>{task.createAt}</span> */}
      <div className="text-center mt-2">
        <button
          className="bg-slate-300 px-3 py-2 my-2 text-black hover:text-white hover:bg-gray-800 rounded transition-colors"
          onClick={() => {
            const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                confirmButton: "bg-green-700 rounded p-1 ml-2 text-white",
                cancelButton: "bg-red-900 rounded p-1 text-white",
              },
              buttonsStyling: false,
            });

            swalWithBootstrapButtons
              .fire({
                title:
                  colaborador.estado == "Activo"
                    ? `Descanso ${colaborador.nombre}`
                    : `Activo ${colaborador.nombre}`,
                text:
                  colaborador.estado == "Activo"
                    ? `cambiaras el estado de ${colaborador.nombre} a Descanso`
                    : `cambiaras el estado de ${colaborador.nombre} a Activo`,

                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, realizar cambio",
                cancelButtonText: "Cancelar",
                reverseButtons: true,
              })
              .then((result) => {
                if (result.isConfirmed) {
                  changeEstado();
                  swalWithBootstrapButtons.fire(
                    colaborador.estado == "Activo" ? "Descanso" : "Activo",
                    colaborador.estado == "Activo"
                      ? `${colaborador.nombre} Descanso`
                      : `${colaborador.nombre} Activo`,
                    "success"
                  );
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    "Cancelado",
                    "Operación Cancelada",
                    "error"
                  );
                }
              });
          }}
        >
          {colaborador.estado === "Activo" ? "Salir" : "Ingresar"}
        </button>
        <h4
          className="bg-grey-300 px-2 py-1 text-white"
          //  onClick={() => navigate(`/edit/${task.id}`)}
        >
          {colaborador.fecha_hora}
        </h4>
      </div>
    </div>
  );
}

export default EstadoColaboradorCard;
