import { PieChart, Pie, Cell } from "recharts";
import { useContext, useState } from "react";
import { EmployeesContext } from "../../../context/employees";
import { filterByDepartment } from "../../../utils/employeesfilters";

function PieChartComponent() {
  const { employeesData } = useContext(EmployeesContext);
  const [employees, setEmployees] = useState(employeesData);
  const Engineering = filterByDepartment(employees, "Engineering"); 
  const Hr = filterByDepartment(employees, "HR");
  const Marketing = filterByDepartment(employees, "Marketing");
  const Sales = filterByDepartment(employees, "Sales");
  const Finance = filterByDepartment(employees, "Finance");
  const data = [
    { name: "Engineering", value: Engineering.length },
    { name: "HR", value: Hr.length },
    { name: "Marketing", value: Marketing.length },
    { name: "Sales", value: Sales.length },
    { name: "Finance", value: Finance.length },
  ];
  const COLORS = ["#3730A3", "#3b82f6", "#7E22CE", "#ea580c", "#16a34a"];
  return(
    <>
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      <div className="flex justify-between font-bold items-center mb-4">
        <h1 className="text-2xl">WorkForce Distribution</h1>
      </div>
      <div className="hidden md:block">
        <PieChart width={600} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      <div className="md:hidden">
        <PieChart width={340} height={300} fontSize={11}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
      </div>
    
    </>
  )
}
export default PieChartComponent;