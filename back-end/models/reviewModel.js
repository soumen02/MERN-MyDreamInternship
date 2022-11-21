const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: {
    type: mongoos.Schema.Types.ObjectId, ref: 'User',
    required: true,
    unique: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

// User static signup method
userSchema.statics.postreview = async function (
  review,
  rating,
  date
) {
  // validation
  if (!review || !rating || !date)  {
    throw Error("All fields must be filled");
  }

  return Review;
};

module.exports = mongoose.model("Review", userSchema);
