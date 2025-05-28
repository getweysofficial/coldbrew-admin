import DashboardCard from "@/app/component/Cards/DashboardCards";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoCafeOutline } from "react-icons/io5";
import { PiCity } from "react-icons/pi";

function Dashboard() {
  return (
    <>
      <div className="my-6 text-left">
        <h1 className="relative inline-block text-2xl font-semibold text-gray-700 sm:text-2xl md:text-3xl">
          Dashboard
          <span className="block h-1 bg-[#BE5103] rounded mt-1 w-1/2 mx-auto" />
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <DashboardCard title="Total Users" value="98" icon={<FiUsers />} />
        <DashboardCard
          title="Total Cafes"
          value="98"
          icon={<IoCafeOutline />}
        />
        <DashboardCard title="Total Countries" value="98" icon={<PiCity />} />
        <DashboardCard title="Total Ads" value="98" icon={<BiUser />} />
      </div>
    </>
  );
}

export default Dashboard;
