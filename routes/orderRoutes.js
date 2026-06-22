import express from "express";
import { addorder, getOrder } from "../controller/managementController.js";

const orderRouter = express.Router();

orderRouter.post("/orders", addorder);
orderRouter.get("/orders", getOrder);

export default orderRouter;
