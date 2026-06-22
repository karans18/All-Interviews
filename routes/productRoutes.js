import express from "express";
import { addProduct } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.post("/products", addProduct);
// productRouter.get("/students", getProduct);

export default productRouter;
