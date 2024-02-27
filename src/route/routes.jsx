import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routeList = [
  {
    path: "/",
    element: <ListUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
