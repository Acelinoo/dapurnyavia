export interface CartItem {
  id: string; // Unique cart item ID (menuId + options hash)
  menuId: string;
  name: string;
  price: number;
  quantity: number;
  portionLabel?: string;
  spicyLevel?: string;
  notes?: string;
  image: string;
}

export type OrderMethod = 'takeaway' | 'delivery' | 'dinein';

export interface OrderCustomerInfo {
  name: string;
  phone: string;
  method: OrderMethod;
  address?: string;
  tableNumber?: string;
  pickupTime?: string;
  notes?: string;
}
