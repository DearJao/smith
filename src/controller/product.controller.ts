import { Request, Response } from 'express';
import ProductService from '../service/products.service';

class AddProduct {
  public productService = new ProductService();

  public addProduct = async (req: Request, res: Response) => {
    const products = await this.productService.create(req.body);
    return res.status(201).json(products);
  };

  public getProduct = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(200).json(products);
  };
}

export default AddProduct;