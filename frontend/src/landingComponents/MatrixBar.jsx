import { Users, Layers, UserCheck, BarChart3 } from "lucide-react";
function MatrixBar() {
  return (
    <>
    <section className="md:py-12 bg-white ">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { Icon: Users, value: "54+", label: "Employees Managed", ibg: "bg-indigo-50", ic: "text-indigo-600" },
              { Icon: Layers, value: "6", label: "Departments", ibg: "bg-violet-50", ic: "text-violet-600" },
              { Icon: UserCheck, value: "47", label: "Active Employees", ibg: "bg-emerald-50", ic: "text-emerald-600" },
              { Icon: BarChart3, value: "100%", label: "Workforce Analytics", ibg: "bg-sky-50", ic: "text-sky-600" },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-12 h-12 ${m.ibg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <m.Icon className={`w-5 h-5 ${m.ic}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900" >{m.value}</div>
                  <div className="text-sm text-gray-500">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section></>    
);
}
export default MatrixBar;