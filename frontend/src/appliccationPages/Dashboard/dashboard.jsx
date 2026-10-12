import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import FullLoading from "../../Loading/FullLoading";
import EachCards from "./DashboardComponents/eachcards";

import PieChartComponent from "./DashboardComponents/pieChart.jsx";
import BarChartComponent from "./DashboardComponents/barchart.jsx";
function Dashboard() {
  const { userData } = useContext(UserContext);

  

  if (!userData) {
    return (
      <>
        <div className="flex justify-center items-center w-full h-150">
          <FullLoading />
        </div>
      </>
    );
  }

  return (
    <div className="p-5 bg-gray-100">
      <div className="pl-2  mt-20">
        <h1 className="text-3xl font-bold mb-2 font-bricolage">
          Welcome to the Dashboard
        </h1>
        <p className="text-lg">
          Hello,{" "}
          <span className="font-bold text-indigo-600">{userData.name}</span>
        </p>
      </div>
      <EachCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
        <BarChartComponent />
        <PieChartComponent />
      </div>
    </div>
  );
}
export default Dashboard;
