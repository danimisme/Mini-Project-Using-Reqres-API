import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ListUser />
      </ProtectedRoute>
    ),
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
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
];
