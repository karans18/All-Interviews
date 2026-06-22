import express from "express";
import { addStudent, getStudent } from "../controller/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/students", addStudent);
studentRouter.get("/students", getStudent);

export default studentRouter;
