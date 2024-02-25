import { useRoutes } from "react-router-dom";
import { routeList } from "./route/routes";

import "./App.css";

const App = () => {
  const routes = useRoutes(routeList);
  return <>{routes}</>;
};

export default App;
