"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("./router/product");
const app = (0, express_1.default)();
const port = 8080;
const localURL = `http://localhost:${port}`;
app.get('/', (_, res) => {
    res.send(`Get products: ${localURL}/products`);
});
app.use('/products', product_1.productRouter);
app.listen(port, () => {
    console.log(`\nServer is running on: ${localURL}\n`);
});
