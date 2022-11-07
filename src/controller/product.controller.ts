import { Request, Response } from 'express';
import ProductService from '../service/products.service';

class AddProduct {
  public productService = new ProductService();

  public addProduct = async (req: Request, res: Response) => {
    const products = await this.productService.create(req.body);
    return res.status(201).json(products);
  };
}

export default AddProduct;