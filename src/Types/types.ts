import { ComponentType } from "react";

export interface MenuItem {
  icon: ComponentType<{ size?: number | string }>;
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

export interface City {
  name: string;
  country_code?: string;
  country_id?: number;
  country_name?: string;
  id?: number;
  latitude?: string;
  longitude?: string;
  state_code?: string;
  state_id?: number;
  state_name?: string;
  wikiDataId?: string;
}

export interface Cities {
  [key: string]: Set<string>;
}
