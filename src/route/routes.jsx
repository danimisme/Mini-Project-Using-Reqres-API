import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";

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
  {
    path: "/user/:id",
    element: <User />,
  },
];
