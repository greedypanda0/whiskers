import { Schema, model, models } from "mongoose";

const PageSchema = new Schema({
  index: {
    type: Number,
    required: true,
  },
  book: {
    type: String,
    ref: "books",
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
});

export default models.pages || model("pages", PageSchema);
