"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = void 0;
const products_1 = require("../mocks/products");
const getProducts = (_, res) => {
    try {
        res.status(201).send(products_1.products);
    }
    catch (err) {
        console.log("Could not get products.", err);
        res.send([]);
    }
};
exports.getProducts = getProducts;
const getProductById = (req, res) => {
    const getId = req.params.id;
    try {
        const findProduct = products_1.products.find(prod => prod.id === parseInt(getId));
        findProduct ? res.status(201).send(findProduct) : res.status(404).send({});
    }
    catch (err) {
        console.log(`Could not get product with id: ${getId}`);
        res.send({});
    }
};
exports.getProductById = getProductById;
// ...
