import Logo from "../assets/full_logo.png";

function Footer() {
    return (
        <>
         <footer className="bg-[#0F0D2A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[2fr,1fr,1fr] gap-12 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="  rounded-lg flex items-center justify-center">
                  <img src={Logo} alt="EmployeeMS Logo" className="w-35 h-25 object-contain" />
                </div>
                
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Modern employee management and workforce analytics for growing organizations.
              </p>
            </div>
        
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Navigation</div>
              <div className="space-y-2.5">
                {["Dashboard", "Employees", "Departments", "Analytics", "Settings"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-slate-500 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Resources</div>
              <div className="space-y-2.5">
                {["Documentation", "Support"].map((link) => (
                  <a key={link} href="#" className="block text-sm text-slate-500 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            </div>
          </div>

          <div className="border-t border-white/[0.07] pt-8">
            <p className="text-sm text-slate-600">&copy; 2026 WorkZen. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </>
    )
}
export default Footer;