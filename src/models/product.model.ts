import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ProductInterface } from '../interface/interfaces';
import connection from './connection';

class ProductsModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(product: ProductInterface): Promise<ProductInterface> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products(name, amount) VALUES(?,?)',
      [product.name, product.amount],
    );
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<ProductInterface[]> {
    const [selected] = await this.connection
      .execute(
        'SELECT * FROM Trybesmith.Products',
      );
    return selected as ProductInterface[];
  }
}

export default ProductsModel;