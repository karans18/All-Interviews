import mongoose, { model } from "mongoose";

const eventSchema = new mongoose.Schema({
  id: Number,
  title: String,
  date: String,
});
export default mongoose.model("Event", eventSchema);
