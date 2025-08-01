import MainLayout from "../layouts/MainLayout";
import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboardPage/dashboard";
import TaskDetails from "../pages/DashboardPage/TaskDetails";

const BasicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default BasicRoutes;
