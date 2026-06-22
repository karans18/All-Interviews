import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  year: Number,
});

export default mongoose.model("Movie", movieSchema);
