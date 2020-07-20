const mongoose = require("mongoose");

const fruitsSchema = mongoose.Schema({
  genus: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  family: {
    type: String,
    required: true,
  },
  order: {
    type: String,
    required: true,
  },
  urlImage: {
    type: String,
    required: true,
  },
  nutritions: [
    {
      name: {
        type: String,
      },
      value: {
        type: Number,
      },
    },
  ],
});

const Fruits = mongoose.model("Fruits", fruitsSchema);

module.exports = Fruits;
