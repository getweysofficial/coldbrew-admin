import { ComponentType } from "react";

export interface MenuItem {
  icon: ComponentType<{ size?: number | string }>; // Type for react-icons components
  label: string;
  href: string;
}
