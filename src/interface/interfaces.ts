export interface ProductInterface {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface UserInterface {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface OrderInterface {
  id: number;
  userId: number;
  productsIds?: number[];
}