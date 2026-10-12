import SideBarItem from "./SideBarItem";
function SideBarList({ isDesktopOpen, Navs ,heading, mobileOpen,setMobileOpen}) {
  return (
    <>
      <div className="">
        {isDesktopOpen && <h1 className="text-lg text-white font-bold mb-2">{heading}</h1>}
        {mobileOpen && <h1 className="text-lg text-white font-bold mb-2">{heading}</h1>}
        {Navs.map((link) => (
          <SideBarItem isDesktopOpen={isDesktopOpen} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} link={link} key={link?.path} />
        ))}
      </div>
    </>
  );
}
export default SideBarList;
