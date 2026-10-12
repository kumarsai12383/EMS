import navLinks from "../landingpagedata/navdata";
import { useState } from "react";
import Logo from "../assets/full_logo.png";
import { Menu, X } from "lucide-react";
import {useNavigate} from "react-router-dom"

function Navbar() {
const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  function navigateTologin(){
        navigate("/auth")
  }
  return (
    <>
      {/* desktop Nav */}
      <nav className="hidden md:block fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-[1200px] h-16 mx-auto ">
          <div className="flex justify-between px-5 flex-row gap-3 items-center">
            <div className="">
              <a href="/">
                <div className="flex items-center w-32 h-17 gap-0">
                  <img src={Logo} alt="Logo" />{" "}
                  
                </div>
              </a>
            </div>

            <div className="flex justify-center items-center">
              <ul className="flex justify-between flex-row gap-6 items-center">
                {navLinks &&
                  navLinks.map((nav) => (
                    <a
                      key={nav.label}
                      href={nav.navigate}
                      className="text-gray-600 hover:text-indigo-600 hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    >
                      {nav.label}
                    </a>
                  ))}
              </ul>
            </div>
            <div className="flex justify-between flex-row gap-3 items-center">
              <button onClick={navigateTologin} className="p-2 text-gray-700 text-sm cursor-pointer">
                
                Sign up
              </button>
              <div className="flex items-center bg-indigo-700 px-4 py-2 gap-2 font-bold text-white text-sm rounded-xl cursor-pointer hover:bg-indigo-800">
                <button onClick={navigateTologin} className="cursor-pointer">Get started </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-move-right-icon lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* deskTop nav ends */}
      {/* mobile nav */}
      <nav className="md:hidden fixed top-0 z-50 bg-white w-full">
        <div className="max-w-[1300px] h-16 mx-auto ">
          <div className="flex justify-between px-5 flex-row gap-3 items-center">
            <a href="/">
              <div className="flex items-center w-25 h-15 gap-2">
                <img src={Logo} alt="Logo" />{" "}
                
              </div>
            </a>
            <div>
              <button
                className="p-2 text-gray-700 text-sm cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className=" flex flex-col gap-3 px-5 py-2 bg-white w-full">
              {navLinks &&
                navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.navigate}
                    className="text-gray-600 hover:text-indigo-600 hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              <div className="flex justify-start flex-row gap-3 items-center">
                <button onClick={navigateTologin} className="p-2 text-gray-700 text-sm cursor-pointer">
                  Sign up
                </button>
                <div className="flex items-center bg-indigo-700 px-4 py-2 gap-2 font-bold text-white text-sm rounded-xl cursor-pointer hover:bg-indigo-800">
                  <button onClick={navigateTologin} className="cursor-pointer">Get started </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* mobile nav ends */}
    </>
  );
}

export default Navbar;
