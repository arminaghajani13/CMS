import { useRoutes } from "react-router";

// project import
// import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";

// ==============================|| ROUTING RENDER ||============================== //

const ThemeRoutes = () => {
  return useRoutes(MainRoutes);
};
export default ThemeRoutes;
