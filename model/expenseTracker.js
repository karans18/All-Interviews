import mongoose from "mongoose";
const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: String,
});

export default mongoose.model("Expense", expenseSchema);
