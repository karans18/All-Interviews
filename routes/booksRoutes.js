import express from "express";
import { addBooks, getBooks } from "../controller/booksController.js";

const bookRouter = express.Router();

bookRouter.post("/books", addBooks);
bookRouter.get("/books", getBooks);
export default bookRouter;
