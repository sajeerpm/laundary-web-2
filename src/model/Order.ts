export interface Order {
  customer_id: string | undefined;
  customer_address_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  billing_address: string | undefined;
  shipping_address: string | undefined;
  postalcode: string | undefined;
  pickup_date: string | undefined;
  pickup_start: string | undefined;
  pickup_end: string | undefined;
  pickup_display: string | undefined;
  delivery_date: string | undefined;
  delivery_start: string | undefined;
  delivery_end: string | undefined;
  delivery_display: string | undefined;
  door_number: string | undefined;
  customer_notes: string | undefined;
  company_name: string | undefined;
  full_address: string | undefined;
  address_type: string | undefined;
  address: string | undefined;
}
