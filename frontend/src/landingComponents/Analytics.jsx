import { Layers, UserCheck, DollarSign, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
function Analytics() {
  const deptData = [
    { name: "Engineering", value: 24 },
    { name: "Marketing", value: 12 },
    { name: "Finance", value: 10 },
    { name: "HR", value: 8 },
    { name: "Product", value: 6 },
    { name: "Design", value: 5 },
  ];
  const activeData = [
    { name: "Active", value: 47 },
    { name: "Inactive", value: 7 },
  ];

  const PIE_COLORS = ["#4F46E5", "#E0E7FF"];
  return (
    <>
      <section id="analytics" className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Charts */}
            <div className="space-y-4 order-2 md:order-1">
              {/* Horizontal bar chart */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="text-sm font-bold text-gray-800 mb-0.5 font-bricolage">
                  Employees by Department
                </div>
                <div className="text-xs text-gray-400 mb-5">
                  Headcount distribution across all teams
                </div>
                <ResponsiveContainer width="100%" height={150}>
                  <BarChart
                    data={deptData}
                    layout="vertical"
                    margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                  >
                    <XAxis
                      type="number"
                      tick={{ fontSize: 10, fill: "#9CA3AF" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fontSize: 10, fill: "#6B7280" }}
                      axisLine={false}
                      tickLine={false}
                      width={80}
                    />
                    <Tooltip
                      contentStyle={{
                        fontSize: 11,
                        borderRadius: 8,
                        border: "1px solid #E5E7EB",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                      cursor={{ fill: "#F9FAFB" }}
                    />
                    <Bar dataKey="value" fill="#4F46E5" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Pie chart */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="text-sm font-bold text-gray-800 mb-0.5 font-bricolage">
                    Active vs Inactive
                  </div>
                  <div className="text-xs text-gray-400 mb-2">
                    Workforce status
                  </div>
                  <ResponsiveContainer width="100%" height={100}>
                    <PieChart>
                      <Pie
                        data={activeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={28}
                        outerRadius={44}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {activeData.map((_, idx) => (
                          <Cell key={idx} fill={PIE_COLORS[idx]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 8 }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex gap-3 mt-1">
                    {activeData.map((d, i) => (
                      <div key={d.name} className="flex items-center gap-1.5">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: PIE_COLORS[i] }}
                        />
                        <span className="text-[10px] text-gray-500">
                          {d.name}: {d.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Avg salary */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="text-sm font-bold text-gray-800 mb-0.5 font-bricolage">
                    Avg. Salary
                  </div>
                  <div className="text-xs text-gray-400 mb-3">
                    Company-wide average
                  </div>
                  <div className="text-3xl font-bold text-indigo-600">
                    $74.2K
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Per year &bull; All departments
                  </div>
                  <div className="mt-3 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3" />
                    +4.2% from last year
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="max-w-lg order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                Analytics
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-5 font-bricolage">
                Turn workforce data into insights
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Use workforce analytics to understand employee distribution,
                activity and organizational trends.
              </p>
              <div className="space-y-4">
                {[
                  {
                    Icon: Layers,
                    label: "Department statistics",
                    desc: "Headcount and distribution by team",
                  },
                  {
                    Icon: UserCheck,
                    label: "Active vs inactive tracking",
                    desc: "Monitor workforce activity in real time",
                  },
                  {
                    Icon: DollarSign,
                    label: "Salary insights",
                    desc: "Average salary and compensation trends",
                  },
                  {
                    Icon: TrendingUp,
                    label: "Workforce trends",
                    desc: "Growth and organizational change over time",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.Icon className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 font-bricolage">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Analytics;
