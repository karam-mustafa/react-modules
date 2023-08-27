import { ROUTES } from "../constans/const";
import Teachers from "./../pages/Teachers";

export const teacherRoutes = [
  {
    path: ROUTES.TEACHERS,
    loader: async () => {
      const first = await fetch("https://dummyjson.com/products/1")
        .then((res) => res.json())
        .then((res) => res);
      const data = await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => res.products);

      return { first, data };
    },
    element: <Teachers />,
  },
];
