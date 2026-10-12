import Sidebar from "../sidebarcomponents/sideBar";

import { Menu, X } from "lucide-react";

import { useLocation, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useState, useEffect } from "react";

function AppLayout() {
  const { setUserData } = useContext(UserContext);
  
  const [isDesktopOpen, setisDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const pageTitles = {
    "/app/dashboard": "Dashboard",
    "/app/employees": "Employees",
    "/app/departments": "Departments",
    "/app/analytics": "Analytics",
    "/app/profile": "Profile",
    "/app/settings": "Settings",
  };
  const pageSubtitles = {
    "/app/dashboard": "Overview of your organization's workforce",
    "/app/employees": "Manage your organization's employees",
    "/app/departments": "Explore employees by department",
    "/app/analytics": "Workforce insights and trends",
    "/app/profile": "Manage your profile",
    "/app/settings": "Manage your account and preferences",
  };
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  },[]);

  return (
    <div className="flex">
      <div
        className={`fixed top-0 z-50 bg-[#0F172A] pl-5 pt-5 h-screen hidden md:block transition-all duration-300 ${
          isDesktopOpen ? "w-55" : "w-20"
        }`}
      >
        <Sidebar
          isDesktopOpen={isDesktopOpen}
          setisDesktopOpen={setisDesktopOpen}
        />
      </div>
      <div
        className={`bg-gray-100 p-5 pt-5 h-screen transition-all duration-300 w-auto md:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <Sidebar mobileOpen={mobileOpen} />
      </div>

      <div className="flex-1 p-1">
        
        <div className={`fixed top-0 left-0 right-0 flex justify-between mb-4 bg-indigo-600 p-2 px-5  ${isDesktopOpen ? "md:ml-55" : "md:ml-20"} transition-all duration-300`}>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold font-bricolage text-white pr-5">
            {pageTitles[location.pathname] || "App Layout"}
          </h1>
          <p className="text-white text-sm">
            {pageSubtitles[location.pathname] || "Manage your organization's workforce"}
          </p>
          </div>
          <button
            className="block md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>

        <div className={`transition-all duration-300 ${isDesktopOpen ? "md:ml-55" : "md:ml-20"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
