import express from "express";
import { addEvents, getEvents } from "../controller/eventController.js";

const router = express.Router();
router.post("/events", addEvents);
router.get("/events", getEvents);

export default router;
