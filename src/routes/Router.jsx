import App from "./../App";
import Main from "./../modules/main/pages/Main";
import { teacherRoutes } from "../modules/teachers/routes/TeacherRoutes";
import { studentsRoutes } from "../modules/students/routes/StudentsRoutes";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      ...teacherRoutes,
      ...studentsRoutes,
    ],
  },
];
