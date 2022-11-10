import { Pool } from 'mysql2/promise';
import { OrderInterface } from '../interface/interfaces';
import connection from './connection';

class OrdersModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<OrderInterface[]> {
    const [selected] = await this.connection
      .execute(
        `
        SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) productsIds
        FROM Trybesmith.Orders o
        INNER JOIN Trybesmith.Products p
        ON p.orderId = o.id
        GROUP BY o.id
        `,
      );
    return selected as OrderInterface[];
  }
}

export default OrdersModel;