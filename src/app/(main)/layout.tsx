"use client";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Header from "../component/Header/Header";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <main className="flex-1 px-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
