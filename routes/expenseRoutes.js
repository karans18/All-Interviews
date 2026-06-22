import express from "express";
import { addExpense, getExpense } from "../controller/expenseController.js";

const expRouter = express.Router();

expRouter.post("/expense", addExpense);
expRouter.get("/expense", getExpense);

export default expRouter;
