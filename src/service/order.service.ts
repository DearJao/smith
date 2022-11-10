import { OrderInterface } from '../interface/interfaces';
// import connection from '../models/connection';
// import ProductsModel from '../models/product.model';
import OrdersModel from '../models/orders.model';

class GetOrders {
  public model = new OrdersModel();

  public async getAll(): Promise<OrderInterface[]> {
    const products = await this.model.getAll();
    return products as OrderInterface[];
  }
}

// [sala ][trybe-smith][req 01] - 

// https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW and 91646604726
export default GetOrders;