import { useContext, useState } from "react";
import { EmployeesContext } from "../../../context/employees";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";
import { filterByDepartment } from "../../../utils/employeesfilters";
function BarChartComponent() {
  const { employeesData } = useContext(EmployeesContext);
  const [employees, setEmployees] = useState(employeesData);
  console.log(employees);
  const Engineering = filterByDepartment(employees, "Engineering");
  const Hr = filterByDepartment(employees, "HR");
  const Marketing = filterByDepartment(employees, "Marketing");
  const Sales = filterByDepartment(employees, "Sales");
  const Finance = filterByDepartment(employees, "Finance");
  const data = [
    { label: "Engineering", value: Engineering.length },
    { label: "HR", value: Hr.length },
    { label: "Marketing", value: Marketing.length },
    { label: "Sales", value: Sales.length },
    { label: "Finance", value: Finance.length },
  ];
  const colors = ["#3730A3", "#3b82f6", "#7E22CE", "#ea580c", "#16a34a"];
  console.log(data);
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
        <div className="flex justify-between font-bold items-center mb-4">
          <h1 className="text-2xl">Employees by Department</h1>
        </div>
        <div className="hidden md:block">
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="label" />
            <YAxis />

            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={entry.label} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="block md:hidden">
          <BarChart width={300} height={300} data={data} fontSize={10}>
            <XAxis dataKey="label" />
            <YAxis />

            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={entry.label} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </>
  );
}
export default BarChartComponent;
