import express from "express";
import { addEmployee } from "../controller/employeeController";

const employeeRouter = express.Router();

employeeRouter.post("/employee", addEmployee);

export default employeeRouter;
