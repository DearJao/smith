import express from 'express';
import productsRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(userRoutes);

export default app;