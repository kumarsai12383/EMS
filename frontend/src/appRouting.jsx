import Landing from "./Browerspages/landingPage";
import AppLayout from "./Browerspages/appLayout";
import Auth from "./pages/auth";
import Dashboard from "./appliccationPages/Dashboard/dashboard";
import ProtectedRoute from "./protectedRoute/protectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {EmployeesContext} from "./context/employees";
import { UserContext } from "./context/userContext";
import { employees } from "./employeesData/employeesdata.js";
function AppRouting() {
  const [userData, setUserData] = useState(null);
  const [employeesData, setEmployeesData] = useState(employees);
  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <EmployeesContext.Provider value={{ employeesData, setEmployeesData }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/app" element={<AppLayout />}>
                <Route
                  path="dashboard"
                  element={<Dashboard />}
                />
                <Route path="employees" element={<div>Employees Page</div>} />
                <Route
                  path="departments"
                  element={<div>Departments Page</div>}
                />
                <Route path="analytics" element={<div>Analytics Page</div>} />
                <Route path="profile" element={<div>Profile Page</div>} />
                <Route path="settings" element={<div>Settings Page</div>} />
              </Route>
            </Route>
          </Routes>
          </EmployeesContext.Provider>
        </UserContext.Provider>
      </Router>
    </>
  );
}
export default AppRouting;
