import { products as productsMock } from "../mocks/products";
import { Request, Response } from 'express';

export const getProducts = (_: Request, res: Response) => {
    try
    {
        res.status(201).send(productsMock);
    }
    catch (err)
    {
        console.log("Could not get products.", err);
        res.send([]);
    }
};

export const getProductById = (req: Request, res: Response) => {
    const getId = req.params.id;
    try
    {
        const findProduct = productsMock.find(prod => prod.id === parseInt(getId));
        findProduct ? res.status(201).send(findProduct) : res.status(404).send({});
    }
    catch (err)
    {
        console.log(`Could not get product with id: ${getId}`);
        res.send({});
    }
};

// ...