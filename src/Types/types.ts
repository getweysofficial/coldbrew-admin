import { ComponentType } from "react";

export interface MenuItem {
  icon: ComponentType<{ size?: number | string }>; // Type for react-icons components
  label: string;
  href: string;
}

export interface DataType {
  key: any;
  name: string;
  age: number;
  address: string;
  email: string;
  country: string;
  city: string;
  created_at: string;
  status: boolean;
}
