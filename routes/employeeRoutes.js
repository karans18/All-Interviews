import express from "express";
import { addEmployee, getEmployee } from "../controller/employeeController.js";

const employeeRouter = express.Router();

employeeRouter.post("/employee", addEmployee);
employeeRouter.get("/employee", getEmployee);

export default employeeRouter;
