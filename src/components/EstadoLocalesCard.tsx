//import { useTasks } from "../context/taskscontext/TaskProvider";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { createRegistroLocalRequest } from "../apis/controlLocales";
import "dayjs/locale/es";
import { useControl } from "../context/controlcontext/ControlProvider";
import Swal from "sweetalert2";

function EstadoLocalCard({ local }: any) {
  const { loadControlLocales }: any = useControl();
  const navigate = useNavigate();

  const changeEstado = async () => {
    await createRegistroLocalRequest({
      id_local: local.id_local,
      cierre: local.cierre === 0 ? 1 : 0,
      estado: local.estado === "Abierto" ? "Cerrado" : "Abierto",
      fecha_hora: dayjs().format(),
      // local: local.local,
    });
    loadControlLocales();
  };

  return (
    <div
      className={
        local.estado === "Abierto"
          ? "bg-teal-700 text-white rounded-md p-4 hover:bg-teal-400 cursor-pointer"
          : "bg-zinc-700 text-white rounded-md p-4 hover:bg-zinc-400 cursor-pointer"
      }
    >
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{local.local}</h2>
        {/*     <span>{task.done == 1 ? "️✅️" : "❌"}</span> */}

        <h4
          // className="bg-slate-300 px-2 py-1 text-black mr-1"
          className={
            local.estado == "Cerrado"
              ? "bg-red-300 px-2 py-1 text-black mr-1 rounded-md"
              : "bg-green-300 px-2 py-1 text-black mr-1 rounded-md"
          }
          //  onClick={() => deleteTask(task.id)}
        >
          {local.estado}
        </h4>

        {/*   <span className="text-xs">{local.id_local}</span> */}
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
                  local.estado == "Abierto"
                    ? `Cerrar ${local.local}`
                    : `Abrir ${local.local}`,
                text:
                  local.estado == "Abierto"
                    ? `cambiaras el estado de ${local.local} a Cerrado`
                    : `cambiaras el estado de ${local.local} a Abierto`,

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
                    local.estado == "Abierto" ? "Cerrado" : "Abierto",
                    local.estado == "Abierto"
                      ? `${local.local} Cerrado`
                      : `${local.local} Abierto`,
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
          // onClick={() => changeEstado()}
        >
          {local.estado == "Cerrado" ? "Abrir" : "Cerrar"}
        </button>
        <h4
          className="bg-grey-300 px-2 py-1 text-white"
          //  onClick={() => navigate(`/edit/${task.id}`)}
        >
          {local.fecha_hora}
        </h4>
      </div>
    </div>
  );
}

export default EstadoLocalCard;
