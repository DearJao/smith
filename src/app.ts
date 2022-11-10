import express from 'express';
import productsRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(userRoutes);
app.use(ordersRoutes);

export default app;