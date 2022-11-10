import express from 'express';
import OrdersController from '../controller/orders.controller';

const router = express.Router();

const OrderController = new OrdersController();

router.get('/orders', OrderController.getOrders);

export default router;