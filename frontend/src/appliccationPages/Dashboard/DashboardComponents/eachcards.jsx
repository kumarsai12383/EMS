import { useState } from "react";
import { filterByDepartment } from "../../../utils/employeesfilters.js";
import { useContext } from "react";
import { EmployeesContext } from "../../../context/employees.jsx";
import { filterByStatus } from "../../../utils/employeesfilters.js";
import {
  UsersRound,
  UserRoundCheck,
  UserRoundX,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import {
  ActiveEmployees,
  InactiveEmployees,
  Departments,
} from "../../../employeesData/employeesdata.js";
import { useNavigate } from "react-router-dom";
function EachCards() {
  const { employeesData } = useContext(EmployeesContext);
  const navigate = useNavigate();
  console.log(employeesData);
  const [TotalEmployees, setTotalEmployees] = useState(employeesData.length);

  const HRDepartment = filterByDepartment(employeesData, "HR");
  const EngineeringDepartment = filterByDepartment(
    employeesData,
    "Engineering",
  );
  const MarketingDepartment = filterByDepartment(employeesData, "Marketing");
  const FinanceDepartment = filterByDepartment(employeesData, "Finance");
  const SalesDepartment = filterByDepartment(employeesData, "Sales");
  const HrDepartActive = filterByStatus(HRDepartment, "Active");
  const HrDepartInactive = filterByStatus(HRDepartment, "Inactive");
  const EngDepartActive = filterByStatus(EngineeringDepartment, "Active");
  const EngDepartInactive = filterByStatus(EngineeringDepartment, "Inactive");
  const MarketingDepartActive = filterByStatus(MarketingDepartment, "Active");
  const MarketingDepartInactive = filterByStatus(
    MarketingDepartment,
    "Inactive",
  );
  const FinanceDepartActive = filterByStatus(FinanceDepartment, "Active");
  const FinanceDepartInactive = filterByStatus(FinanceDepartment, "Inactive");
  const SalesDepartActive = filterByStatus(SalesDepartment, "Active");
  const SalesDepartInactive = filterByStatus(SalesDepartment, "Inactive");
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        <div className="bg-white md:flex gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="flex items-center bg-indigo-600 py-3 px-4 rounded-xl">
            <UsersRound className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-md md:text-xl font-semibold">
              Total Employees
            </h2>
            <p className="text-md md:text-xl font-bold">{TotalEmployees}</p>
          </div>
        </div>
        <div className="bg-white md:flex  gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="flex items-center bg-green-600 py-3 px-4 rounded-xl">
            <UserRoundCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-md md:text-xl font-semibold mb-2">Active </h2>
            <p className="text-md md:text-xl font-bold">
              {ActiveEmployees.length}
            </p>
          </div>
        </div>
        <div className="bg-white md:flex  gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="flex items-center bg-gray-500 py-3 px-4 rounded-xl">
            <UserRoundX className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-md md:text-xl font-semibold mb-2">Inactive </h2>
            <p className="text-md md:text-xl font-bold">
              {InactiveEmployees.length}
            </p>
          </div>
        </div>
        <div className="bg-white md:flex  gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="flex items-center bg-blue-600 py-3 px-4 rounded-xl">
            <Warehouse className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-md md:text-xl font-semibold mb-2">
              Departments
            </h2>
            <p className="text-md md:text-xl font-bold">{Departments.size}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-2xl font-bold mb-4 mt-1 font-bricolage underline decoration-indigo-600">
          Departments Overview
        </h1>
        <div className="flex items-center md:gap-2">
          <button
            onClick={() => navigate("/app/departments")}
            className=" text-indigo-600 rounded-lg cursor-pointer"
          >
            View All Departments
          </button>
          <div className="flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-indigo-600 inline-block" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        <div className="bg-white md:flex gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-md md:text-lg font-semibold text-gray-800">
                HR
              </h2>
              <p className="w-2 h-2 bg-blue-600 rounded-full"></p>
            </div>
            <p className="text-md md:text-3xl pb-1 text-gray-900 font-bold">
              {HRDepartment.length}
            </p>
            <div className="text-md md:text-lg text-gray-600">
              <div className="flex w-auto mb-1 items-center gap-2">
                <div className="flex justify-center items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div className="flex text-gray-800 items-center justify-center gap-2">
                  <span className="  text-sm">{HrDepartActive.length} </span>{" "}
                  <span className=" text-sm">active</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex items-center text-gray-400 justify-center gap-2">
                  <span className="  text-sm">{HrDepartInactive.length} </span>{" "}
                  <span className=" text-sm">inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white md:flex gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-md md:text-lg font-semibold text-gray-800">
                Engineering
              </h2>
              <p className="w-2 h-2 bg-indigo-900 rounded-full"></p>
            </div>
            <p className="text-md md:text-3xl pb-1 text-gray-900 font-bold">
              {EngineeringDepartment.length}
            </p>
            <div className="text-md md:text-lg text-gray-600">
              <div className="flex w-auto mb-1 items-center gap-2">
                <div className="flex justify-center items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div className="flex text-gray-800 items-center justify-center gap-2">
                  <span className="  text-sm">{EngDepartActive.length} </span>{" "}
                  <span className=" text-sm">active</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex items-center text-gray-400 justify-center gap-2">
                  <span className="  text-sm">{EngDepartInactive.length} </span>{" "}
                  <span className=" text-sm">inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white md:flex gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-md md:text-lg font-semibold text-gray-800">
                Finance
              </h2>
              <p className="w-2 h-2 bg-green-600 rounded-full"></p>
            </div>
            <p className="text-md md:text-3xl pb-1 text-gray-900 font-bold">
              {FinanceDepartment.length}
            </p>
            <div className="text-md md:text-lg text-gray-600">
              <div className="flex w-auto mb-1 items-center gap-2">
                <div className="flex justify-center items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div className="flex text-gray-800 items-center justify-center gap-2">
                  <span className="  text-sm">
                    {FinanceDepartActive.length}{" "}
                  </span>{" "}
                  <span className=" text-sm">active</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex items-center text-gray-400 justify-center gap-2">
                  <span className="  text-sm">
                    {FinanceDepartInactive.length}{" "}
                  </span>{" "}
                  <span className=" text-sm">inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white md:flex gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-md md:text-lg font-semibold text-gray-800">
                Marketing
              </h2>
              <p className="w-2 h-2 bg-purple-600 rounded-full"></p>
            </div>
            <p className="text-md md:text-3xl pb-1 text-gray-900 font-bold">
              {MarketingDepartment.length}
            </p>
            <div className="text-md md:text-lg text-gray-600">
              <div className="flex w-auto mb-1 items-center gap-2">
                <div className="flex justify-center items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div className="flex text-gray-800 items-center justify-center gap-2">
                  <span className="  text-sm">
                    {MarketingDepartActive.length}{" "}
                  </span>{" "}
                  <span className=" text-sm">active</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex items-center text-gray-400 justify-center gap-2">
                  <span className="  text-sm">
                    {MarketingDepartInactive.length}{" "}
                  </span>{" "}
                  <span className=" text-sm">inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white md:flex gap-5 shadow-sm hover:scale-102 duration-300 rounded-lg p-4">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-md md:text-lg font-semibold text-gray-800">
                Sales
              </h2>
              <p className="w-2 h-2 bg-orange-600 rounded-full"></p>
            </div>
            <p className="text-md md:text-3xl pb-1 text-gray-900 font-bold">
              {SalesDepartment.length}
            </p>
            <div className="text-md md:text-lg text-gray-600">
              <div className="flex w-auto mb-1 items-center gap-2">
                <div className="flex justify-center items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div className="flex text-gray-800 items-center justify-center gap-2">
                  <span className="  text-sm">{SalesDepartActive.length} </span>{" "}
                  <span className=" text-sm">active</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex items-center text-gray-400 justify-center gap-2">
                  <span className="  text-sm">
                    {SalesDepartInactive.length}{" "}
                  </span>{" "}
                  <span className=" text-sm">inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EachCards;
