import { ChevronRight,Users,Layers,BarChart3,Search } from "lucide-react";

function Features() {
    const features = [
  {
    Icon: Users,
    title: "Employee Management",
    desc: "Create, update, view and manage employee profiles from one place.",
    bg: "#EEF2FF",
    ic: "#4F46E5",
  },
  {
    Icon: Layers,
    title: "Department Management",
    desc: "Organize employees by department and quickly explore department teams.",
    bg: "#F0FDF4",
    ic: "#16A34A",
  },
  {
    Icon: BarChart3,
    title: "Workforce Analytics",
    desc: "Understand employee distribution, status, salary and workforce trends.",
    bg: "#FFF7ED",
    ic: "#EA580C",
  },
  {
    Icon: Search,
    title: "Smart Search & Filtering",
    desc: "Quickly find employees using search, department, role and status filters.",
    bg: "#F0F9FF",
    ic: "#0284C7",
  },
];
    return (
    <>
    <section id="features" className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              Features
            </div>
            <h2 className="text-4xl font-bold font-bricolage text-gray-900 mb-4" >
              Everything you need to manage your workforce
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Powerful tools designed to make employee management simple and organized.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: f.bg }}
                >
                  <f.Icon className="w-5 h-5" style={{ color: f.ic }} />
                </div>
                <h3 className="text-base font-bold font-bricolage text-gray-900 mb-2" >{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.desc}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:gap-2 transition-all duration-150">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></>
    )
}
export default Features;