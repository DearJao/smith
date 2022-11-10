import { Request, Response } from 'express';
import OrderService from '../service/order.service';

class GetOrders {
  public OrderService = new OrderService();

  public getOrders = async (_req: Request, res: Response) => {
    const orders = await this.OrderService.getAll();
    return res.status(200).json(orders);
  };
}

export default GetOrders;