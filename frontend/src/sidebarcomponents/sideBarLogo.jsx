import Logo from "../assets/logo.png";
function SideBarLogo({ isOpen }) {
  return (
    <div className={`flex bg-white rounded-xl items-center justify-center gap-0 mb-3 ${isOpen ? "px-3 py-1" : "w-12 h-12"}`}>
      <img src={Logo} alt="Logo" className="w-8 h-8" />
        {isOpen && <h1 className="font-bold text-[#10203a] text-lg">Work<span className="text-indigo-600">Zen</span></h1>}
    </div>
  );
}
export default SideBarLogo;