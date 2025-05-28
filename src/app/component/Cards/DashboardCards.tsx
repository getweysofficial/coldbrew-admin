"use client";
import { IoIosEye } from "react-icons/io";

import React from "react";
import AppButton from "../AppButton/AppButton";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-fadeIn">
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-[#D87A30] to-[#A04203] shadow-lg">
          <span className="text-white text-2xl">{icon}</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#303642]">{value}</h2>
          <p className="text-sm font-medium text-gray-500 mt-1">{title}</p>
        </div>
      </div>
      <div className="flex justify-end items-center mt-1">
        <AppButton
          className="text-xs"
          label="View"
          onClick={() => console.log("Total User")}
        />
      </div>
    </div>
  );
};

export default DashboardCard;
