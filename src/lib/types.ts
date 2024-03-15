import type { SVGProps } from "react";

export interface IconPropTypes extends SVGProps<SVGSVGElement> {}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  available_balance: string;
  image: string;
  qualification: string;
  nin: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  book_balance: string;
  business: Business | null;
  shop: Shop;
}

interface Business {
  id: number;
  name: string;
  biography: string;
  cover_image: string;
  opening_time: string;
  closing_time: string;
  contact_email: string;
  contact_phone: string;
  service_charge: string;
  contact_address: {
    street: string;
    city: string;
    state: string;
    country: string;
    full_address: string;
  };
  vendor_id: number;
  longitude: string;
  latitude: string;
  service_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  service: {
    id: number;
    name: string;
    is_bookable: true;
    description: string;
    cover_image: string;
    is_active: true;
    deleted_at: string | null;
  };
}

interface Shop {
  id: number;
  name: string;
  biography: string;
  cover_image: string;
  opening_time: string;
  closing_time: string;
  contact_email: string;
  contact_phone: string;
  contact_address: {
    street: string;
    city: string;
    state: string;
    country: string;
    full_address: string;
  };
  vendor_id: number;
  discount: string;
  shipping_cost: string;
  longitude: string;
  latitude: string;
  service_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  service: Service;
}

interface Service {
  id: number;
  name: string;
  is_bookable: false;
  description: string;
  cover_image: string;
  is_active: boolean;
  deleted_at: null;
}

export type PageMetaData = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  next_page_url: string;
  prev_page_url: string;
  from: number;
  to: number;
};
