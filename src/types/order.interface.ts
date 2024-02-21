import { InOrder, InProduct } from "./product.interface";

export interface OrderInfo {
  id: number;
  orderId: string;
  addressInfo: AddressInfo;
  orderItem: OrderItem;
  quantity: number;
  amount: number;
  status: string;
  createAt: string;
  updateAt: string;
  deleteAt: string;
}

export interface OrderItem {
  id?: number;
  products: InOrder[];
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
