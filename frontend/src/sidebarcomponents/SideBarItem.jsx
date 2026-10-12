import { NavLink } from "react-router-dom";
function SideBarItem({ isDesktopOpen,link,mobileOpen,setMobileOpen})  {
    return (
        <div
            className="flex items-center justify-center gap-0 mb-2"
           
          >
            <NavLink
              to={link.path}
              onClick={() => {
                if (mobileOpen) {
                  setMobileOpen(false);
                }
              }}
              className={({ isActive }) =>
                `flex text-sm items-center gap-3 w-full ${isDesktopOpen ? "px-3 py-2" : "px-2 py-2"} rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 font-bold text-white"
                    : "text-gray-400 font-bold hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              <link.icon size={20} /> {isDesktopOpen && <span>{link.label}</span> } {mobileOpen && <span>{link.label}</span> }
            </NavLink>
          </div>
    )
}
export default SideBarItem;