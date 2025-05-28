// src/data/data.ts
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { PiCity } from "react-icons/pi";
import { IoCafeOutline, IoNewspaperOutline } from "react-icons/io5";
import { VscEditorLayout } from "react-icons/vsc";
import { MenuItem } from "@/Types/types";

export const menuItems: MenuItem[] = [
  {
    icon: MdOutlineDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: FiUsers,
    label: "Users",
    href: "/users",
  },
  {
    icon: PiCity,
    label: "Manage Cities",
    href: "/manageCities",
  },
  {
    icon: IoCafeOutline,
    label: "Cafe",
    href: "/cafe",
  },
  {
    icon: VscEditorLayout,
    label: "Editor Choice",
    href: "/editorChoice",
  },
  {
    icon: IoNewspaperOutline,
    label: "NewsLetter",
    href: "/newsletter",
  },
];
