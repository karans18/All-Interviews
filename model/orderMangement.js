import mongoose from "mongoose";
const mangeSchema = new mongoose.Schema(
  {
    customer: String,
    amount: Number,

    status: String,
  },
  { timestamps: true },
);

export default mongoose.model("manageMentSystem", mangeSchema);
