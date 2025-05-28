// src/data/data.ts
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { PiCity } from "react-icons/pi";
import { IoCafeOutline, IoNewspaperOutline } from "react-icons/io5";
import { VscEditorLayout } from "react-icons/vsc";
import { MenuItem } from "@/Types/types";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { FaBuysellads } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

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
    label: "Manage Areas",
    href: "/manageAreas",
  },
  {
    icon: IoCafeOutline,
    label: "Manage Cafes",
    href: "/dashboard",
  },
  {
    icon: VscEditorLayout,
    label: "Editor Choice",
    href: "/dashboard",
  },
  {
    icon: IoNewspaperOutline,
    label: "News Letter",
    href: "/dashboard",
  },
  {
    icon: MdOutlineReviews,
    label: "Manage Reviews",
    href: "/dashboard",
  },
  {
    icon: FaBuysellads,
    label: "Manage Ads",
    href: "/dashboard",
  },
  {
    icon: PiNotepad,
    label: "Terms & Conditions",
    href: "/dashboard",
  },
  {
    icon: MdOutlinePrivacyTip,
    label: "Privacy & Policy",
    href: "/dashboard",
  },
];
