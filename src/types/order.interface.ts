export interface Order {
  id: string;
  orderId: string;
  addressInfo: AddressInfo[];
  orderItem: OrderItem[];
  quantity: number;
  amount: number;
  status: string;
  createAt: Date;
  updateAt: Date;
  deleteAt: Date;
}

export interface OrderItem {
  id?: number;
  nameBook: string;
  price: number;
  qty: number;
  total: number;
}

export interface AddressInfo {
  name: string;
  street: string;
  district: string;
  city: string;
  province: string;
  postcode: string;
  phone: string;
}
