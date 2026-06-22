import express from "express";
import eventRoutes from "./routes/eventRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
app.use("/", studentRoutes);
app.use("/", eventRoutes);
app.use("/", productRoutes);

export default app;
