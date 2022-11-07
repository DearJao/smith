import { ProductInterface } from '../interface/interfaces';
// import connection from '../models/connection';
import ProductsModel from '../models/product.model';

class AddProduct {
  public model = new ProductsModel();

  public async create(product: ProductInterface): Promise<ProductInterface> {
    const products = await this.model.create(product);
    return products;
  }

  public async getAll(): Promise<ProductInterface[]> {
    const products = await this.model.getAll();
    return products as ProductInterface[];
  }
}

// [sala ][trybe-smith][req 01] - 

// https://app.sli.do/event/1E3nDTpqY51JrQeLW48XrW and 91646604726
export default AddProduct;