import express from 'express';
import { productRouter } from './router/product';

const app = express();

const port = 8080;

const localURL = `http://localhost:${port}`;

app.get('/', (_,res) => {
    res.send(
        `Get products: ${localURL}/products`
    );
});

app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`\nServer is running on: ${localURL}\n`);
});