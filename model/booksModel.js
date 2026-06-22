import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});
export default mongoose.model("Books", bookSchema);
