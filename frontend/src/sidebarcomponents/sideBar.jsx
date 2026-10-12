import { MainNavs } from "./sideBarData";
import { AccountNavs } from "./sideBarData";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import SideBarList from "./sideBarList";
import SideBarLogo from "./sideBarLogo";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

function Sidebar({
  isDesktopOpen,
  setisDesktopOpen,
  mobileOpen,
  setMobileOpen,
}) {
  const { userData } = useContext(UserContext);
  const [isLogout, setIsLogout] = useState(false);
  if (isLogout) {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
   
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <aside className="p-3 hidden bg-none md:block">
          <div
            className={`flex items-center ${isDesktopOpen ? "flex-row justify-between" : "flex-col justify-center"} mb-3`}
          >
            <SideBarLogo isOpen={isDesktopOpen} />
            <button
              onClick={() => {
                setisDesktopOpen(!isDesktopOpen);
              }}
            >
              {isDesktopOpen ? (
                <PanelRightOpen size={20} className="text-white" />
              ) : (
                <PanelRightClose size={20} className="text-white" />
              )}
            </button>
          </div>
          <hr className="mb-5" />
          <div className="flex flex-col gap-2">
            <SideBarList
              isDesktopOpen={isDesktopOpen}
              Navs={MainNavs}
              heading="Main menu"
            />

            <SideBarList
              isDesktopOpen={isDesktopOpen}
              Navs={AccountNavs}
              heading="Account Menu"
            />
          </div>
          <div
            className={`absolute bottom-0 left-0 w-full  p-3 mx-auto ${isDesktopOpen ? "pb-10" : "p-4"} items-center`}
          >
            <div className="flex items-center gap-2 ">
              <span
                className={`text-indigo-900 bg-white rounded-2xl p-2 font-bold ${isDesktopOpen ? "text-base flex justify-center gap-2 items-center" : "text-sm"}`}
              >
                <User size={20} className="text-indigo-900" />{" "}
                {isDesktopOpen && userData?.name}
              </span>
            </div>
            <div
              className={`flex-col items-center justify-between gap-2 ${isDesktopOpen ? "mt-2" : "mt-1"}`}
            >
              <span className={`text-gray-400 text-sm`}>
                {isDesktopOpen && userData?.email}
              </span>
              <button
                className={`bg-red-500 cursor-pointer hover:bg-red-600 text-white py-2 px-4 rounded ${isDesktopOpen ? "block" : "hidden"}`}
                onClick={() => {
                  alert("You have been logged out successfully.");
                  setIsLogout(true);
                  navigate("/auth");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </aside>
        {/* <div className="h-full w-1 hidden md:block">
        <button
            onClick={() => {
              setisDesktopOpen(!isDesktopOpen);
            }}
          >
            {isDesktopOpen ? <PanelRightOpen size={20} /> : <PanelRightClose size={20} /> }
          </button>
      </div> */}
      </div>
      {/* this is the mobile sidebar */}
      {mobileOpen && (
        <aside
          className={` bg-[#0F172A] px-5 pt-5 h-screen fixed top-0 left-0 z-50 transition-all duration-300 md:hidden ${
            mobileOpen ? "w-64" : "w-0 overflow-hidden"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <SideBarLogo isOpen={mobileOpen} />
          </div>
          <hr className="mb-5" />
          <div className="flex flex-col gap-2">
            <SideBarList
              mobileOpen={mobileOpen}
              Navs={MainNavs}
              heading="Main Menu"
              setMobileOpen={setMobileOpen}
            />
            <SideBarList
              mobileOpen={mobileOpen}
              Navs={AccountNavs}
              heading="Account Menu"
              setMobileOpen={setMobileOpen}
            />
          </div>
          <div
            className={`absolute bottom-15 left-0 w-full  mx-auto ${mobileOpen ? "p-6" : "p-4"} items-center`}
          >
            <div className="">
              <span
                className={`text-indigo-900 bg-white rounded-2xl p-3 font-bold ${mobileOpen ? "text-base flex justify-center gap-2 items-center" : "text-sm"}`}
              >
                <User size={20} className="text-indigo-900" /> {userData?.name}
              </span>
              <span
                className={`text-white ${mobileOpen ? "text-[15px]" : "text-sm"}`}
              >
                {userData?.email}
              </span>
              <div
                className={`flex items-center justify-between gap-2 ${mobileOpen ? "mt-2" : "mt-1"}`}
              >
                <button
                  className="bg-red-500 cursor-pointer hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => {
                    setIsLogout(true);
                    navigate("/auth");
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
export default Sidebar;
