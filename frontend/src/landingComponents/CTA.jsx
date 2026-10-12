import { ArrowRight } from "lucide-react";
function CTA(){
    return(
        <>
        <section className="py-28 bg-[#1E1B4B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25)_0%,transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight font-bricolage">
            Ready to manage your
            <br />
            <span className="text-indigo-300 font-bricolage">workforce better?</span>
          </h2>
          <p className="text-indigo-200 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Bring employee management, departments and workforce analytics together in one platform.
          </p>
          <a
            href="/auth"
            className="inline-flex items-center gap-2.5 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-indigo-50 transition-colors shadow-lg shadow-black/25"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
        </>
    )
}
export default CTA;