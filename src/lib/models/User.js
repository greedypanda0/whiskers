const { models, model, Schema } = require("mongoose");

const User = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  books: [],
  star: [],
});

export default models.users || model("users", User);
