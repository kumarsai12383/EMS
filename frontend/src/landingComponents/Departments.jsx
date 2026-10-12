
import { ArrowRight } from "lucide-react";

function Departments() {
    const departments = [
  { name: "Engineering", total: 24, active: 20, color: "#4F46E5" },
  { name: "Marketing", total: 12, active: 9, color: "#7C3AED" },
  { name: "Human Resources", total: 8, active: 7, color: "#059669" },
  { name: "Finance", total: 10, active: 8, color: "#D97706" },
];
    return(
        <>
         <section id="departments" className="py-10 bg-white border-y border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                Departments
              </div>
              <h2 className="text-4xl font-bold font-bricolage text-gray-900 mb-5" >
                Every department, organized.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Explore employees by department and instantly understand team size, activity and workforce distribution.
              </p>
              <a
                href="/auth"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-150"
              >
                Explore Departments <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {departments.map((d) => (
                <div
                  key={d.name}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-shadow duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm"
                    style={{ backgroundColor: d.color }}
                  >
                    {d.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm font-bricolage" >{d.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{d.total} Employees</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${(d.active / d.total) * 100}%`, backgroundColor: d.color }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{d.active} Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default Departments;