import { useRoutes } from "react-router-dom";
import { routeList } from "./route/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const routes = useRoutes(routeList);
  return <>{routes}</>;
};

export default App;
