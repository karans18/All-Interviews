import express from "express";
import { addProduct, getProduct } from "../controller/productController.js";

const productRouter = express.Router();

productRouter.post("/products", addProduct);
productRouter.get("/products", getProduct);

export default productRouter;
