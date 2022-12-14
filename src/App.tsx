import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import {
  AuthContextProvider,
  UserAuth,
} from "./context/authcontext/AuthProvider";
import Protected from "./components/Protected";
import Account from "./pages/Account";
import TasksPage from "./pages/tasks/TasksPage";
import { TaskContextProvider } from "./context/taskscontext/TaskProvider";
import TaskForm from "./pages/tasks/TaskForm";
import NotFound from "./pages/NotFound";
import Colaboradores from "./pages/colaboradores/Colaboradores";
import ControlColaboradores from "./pages/colaboradores/ControlColaboradores";
import Locales from "./pages/locales/Locales";
import ControlLocales from "./pages/locales/ControlLocales";
import ColaboradorForm from "./pages/colaboradores/ColaboradorForm";
import LocalForm from "./pages/locales/LocalForm";
import { ControlContextProvider } from "./context/controlcontext/ControlProvider";
import Navbar2 from "./components/Navbar2";
import Documentation from "./pages/Documentation";

function App() {
  const { user }: any = UserAuth();
  return (
    <div>
      <AuthContextProvider>
        <Navbar2 />

        <div className="container mx-auto py-4 px-20">
          <TaskContextProvider>
            <ControlContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/tareas"
                  element={
                    <Protected>
                      <TasksPage />
                    </Protected>
                  }
                />
                <Route
                  path="/nueva-tarea"
                  element={
                    <Protected>
                      <TaskForm />
                    </Protected>
                  }
                />
                <Route
                  path="/tarea/editar/:id"
                  element={
                    <Protected>
                      <TaskForm />
                    </Protected>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Protected>
                      <NotFound />
                    </Protected>
                  }
                />

                <Route path="/signin" element={<Signin />} />

                <Route
                  path="/colaboradores"
                  element={
                    <Protected>
                      <Colaboradores />
                    </Protected>
                  }
                />
                <Route
                  path="/controlingreso/colaboradores"
                  element={
                    <Protected>
                      <ControlColaboradores />
                    </Protected>
                  }
                />

                <Route
                  path="/nuevo-colaborador"
                  element={
                    <Protected>
                      <ColaboradorForm />
                    </Protected>
                  }
                />
                <Route
                  path="/editar-colaborador/:id"
                  element={
                    <Protected>
                      <ColaboradorForm />
                    </Protected>
                  }
                />
                <Route
                  path="/locales"
                  element={
                    <Protected>
                      <Locales />
                    </Protected>
                  }
                />
                <Route
                  path="/controlcierre/locales"
                  element={
                    <Protected>
                      <ControlLocales />
                    </Protected>
                  }
                />

                <Route
                  path="/nuevo-local"
                  element={
                    <Protected>
                      <LocalForm />
                    </Protected>
                  }
                />
                <Route
                  path="/editar-local/:id"
                  element={
                    <Protected>
                      <LocalForm />
                    </Protected>
                  }
                />

                <Route
                  path="/account"
                  element={
                    <Protected>
                      <Account />
                    </Protected>
                  }
                />
                <Route path="/documentacion" element={<Documentation />} />
              </Routes>
            </ControlContextProvider>
          </TaskContextProvider>
        </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
