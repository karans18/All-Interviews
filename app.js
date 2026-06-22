import express from "express";
import eventRoutes from "./routes/eventRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(express.json());
app.use("/", studentRoutes);
app.use("/", eventRoutes);

export default app;
