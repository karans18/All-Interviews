import express from "express";
import eventRoutes from "./routes/eventRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import employeeRouter from "./routes/employeeRoutes.js";
import expenseRouter from "./routes/expenseRoutes.js";
import bookRouter from "./routes/booksRoutes.js";

const app = express();
app.use(express.json());

app.use("/", studentRoutes);
app.use("/", eventRoutes);
app.use("/", productRoutes);
app.use("/", movieRoutes);
app.use("/", employeeRouter);
app.use("/", expenseRouter);
app.use("/", bookRouter);

export default app;
