import express from "express";
import { addMovie, getMovie } from "../controller/movieController.js";

const movieRouter = express.Router();

movieRouter.post("/movies", addMovie);
movieRouter.get("/movies", getMovie);

export default movieRouter;
