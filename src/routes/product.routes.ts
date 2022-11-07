import express from 'express';
import ProductsController from '../controller/product.controller';

const router = express.Router();

const ProductController = new ProductsController();

router.post('/products', ProductController.addProduct);

export default router;