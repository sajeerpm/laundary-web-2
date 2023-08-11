export interface CustomerOrder {
  id: number;
  order_no: string;
  order_date: string;
  status: string;
  customer_name: string;
  shipping_address: string;
  customer_phone: string;
  total: string;
  items: Items[];
}

interface Items {
  id: number;
  item_name: string;
  quantity: number;
  price: string;
  discount: string;
}
