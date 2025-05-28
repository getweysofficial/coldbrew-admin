"use client";

import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import AppButton from "../AppButton/AppButton";
import logo from "../../../../public/images/coldbrew-single.png";
import { useAuth } from "@/Context/authContext";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <header className="w-full px-4 py-3 md:px-6 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo (Mobile Only) */}
        <div className="flex items-center gap-2 md:hidden">
          <Image
            src={logo}
            alt="Cold Brew Logo"
            width={40}
            height={40}
            className="rounded-md object-contain"
            priority
          />
          <span className="text-2xl font-extrabold text-[#303642]">
            Cold Brew
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-auto">
          {/* User Profile */}
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer text-[#303642]">
              <BiUser size={26} />
              <span className="text-sm font-semibold hidden sm:inline">
                {user?.name || "User"}
              </span>
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-64 p-4 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-1">
                  <BiUser size={30} className="text-[#BE5103]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {user?.name || "Anonymous"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {user?.email || "No email"}
                  </p>
                </div>
              </div>
              <AppButton label="Logout" onClick={logout} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-[#BE5103]"
            aria-label="Toggle sidebar"
          >
            <IoMenu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
