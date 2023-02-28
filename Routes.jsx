import { Route, Router, Routes } from "react-router-dom";
import Servicos from "./src/Pages/servicos/Servicos";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
