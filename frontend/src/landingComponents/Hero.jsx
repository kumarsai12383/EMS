import { ArrowRight } from "lucide-react";
import {useNavigate} from "react-router-dom"
import Dashboard from "../assets/dashboard-closed.png"
function Hero() {
  const navigate = useNavigate()

  return (
    <>
      <section id="hero" className="h-auto pb-6 bg-blue-white">
        <div className=" mt-25">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Workforce Management Platform
          </div>
          
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3 p-5 justify-center">
              <h1 className="text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6 font-[Bricolage_Grotesque] text-[#10203a]">
                Manage <span className="text-indigo-600">your workforce.</span>
                <br />
                Understand your organization.
              </h1>
              <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed mb-8">
                <span className="font-bricolage font-bold text-[#10203a]">Work</span><span className="font-bricolage font-bold text-indigo-600">Zen</span> helps organizations manage employees, organize
                departments, track workforce status, and understand their
                workforce through powerful analytics.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="/auth"
                  className="inline-flex text-sm sm:text-lg items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200/60"
                >
                  Get Started <ArrowRight />
                </a>
                <a
                  href="/auth"
                  className="inline-flex text-sm sm:text-lg items-center gap-2 text-gray-700 border border-gray-200 bg-white px-6 py-3 rounded-xl font-medium hover:border-indigo-300 hover:text-indigo-600 transition-all duration-150"
                >
                  Explore Dashboard
                </a>
              </div>
              <p className="text-sm text-gray-400 tracking-wide">
                Simple &bull; Secure &bull; Data-driven
              </p>
            </div>
            <div className="  w-full h-full">
              <img src={Dashboard} alt="Dashboard Preview" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
