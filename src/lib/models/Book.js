import { Schema, model, models } from "mongoose";

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    ref: "users",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pages: {
    default: [],
  },
});

export default models.books || model("books", BookSchema);
