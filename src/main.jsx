import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Teachers from "./modules/teachers/pages/Teachers.jsx";
import Main from "./modules/main/pages/Main.jsx";
import Students from "./modules/students/pages/Students.jsx";
import GuardedRoutes from "./routes/GuardedRoutes.jsx";
import { ROUTES } from "./modules/teachers/constans/const.js";
import NotAuthorized from "./components/NotAuthorized.jsx";
// import routes from './routes/Router.jsx';


const isAuthenticated = localStorage.getItem('user');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Main />} />
      <Route
        path="teachers"
        element={
          <GuardedRoutes
            isAccessable={!isAuthenticated}
            OnSucess={() => <Teachers />}
          />
        }
      />
      <Route path="students" element={<Students />} />
    </Route>
  )
);

// const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
