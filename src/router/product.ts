import { Router } from 'express';
import { getProductById, getProducts } from '../controller/product';

export const productRouter = Router();

productRouter.get('/', getProducts);

productRouter.get('/:id', getProductById);

// productRouter.post('/:id', ...);

// productRouter.put('/:id', ...);

// productRouter.delete('/:id', ...);
