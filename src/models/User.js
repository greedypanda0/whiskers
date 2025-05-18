const { models, model, Schema } = require("mongoose");

const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
});

export default models.users || model("users", User);
