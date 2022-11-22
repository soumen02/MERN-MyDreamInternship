const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

// // User static signup method
// userSchema.statics.postreview = async function (
//   review,
//   rating,
//   date,
//   position,
//   company,
//   user
// ) {
//   // validation
//   if (!review || !rating || !date || !position || !company || !user)  {
//     throw Error("All fields must be filled");
//   }

//   return Review;
// };

module.exports = mongoose.model("Review", reviewSchema);
