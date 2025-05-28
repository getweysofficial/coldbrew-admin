"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/coldbrew-single.png";
import { IoCloseOutline } from "react-icons/io5";
import { menuItems } from "@/Data/data";
import { MenuItem } from "@/Types/types";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-opacity-60 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 md:w-64 bg-gradient-to-b from-white to-[#f8fafc] text-[#303642]
          shadow-xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:flex md:flex-col
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Cold Brew"
              width={40}
              height={40}
              className="object-contain rounded-md"
              priority
            />
            <span className="text-2xl font-extrabold text-[#303642]">
              ColdBrew
            </span>
          </div>
          <button
            className="text-[#303642] md:hidden hover:text-[#BE5103] transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          >
            <IoCloseOutline size={28} />
          </button>
        </div>

        <nav className="flex flex-col px-3 py-4 space-y-1 flex-grow overflow-y-auto">
          {menuItems.map((item: MenuItem) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.label}
                className={`
                  group flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold
                  transition-all duration-200 ease-in-out
                  ${
                    pathname === item.href
                      ? "text-[#BE5103] bg-[#BD4E05]/10 shadow-sm"
                      : "text-gray-500 hover:bg-[#BE5103] hover:text-white"
                  }
                `}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <span
                  className={`
                    p-1 rounded-md border transition-colors
                    ${
                      pathname === item.href
                        ? "text-[#BE5103] border-[#BE5103] bg-white"
                        : "text-[#303642] border-white group-hover:bg-white group-hover:text-[#BE5103] group-hover:border-[#BE5103]"
                    }
                  `}
                >
                  <Icon size={20} />
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
