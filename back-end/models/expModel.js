const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expSchema = new Schema({
  user: {
    type: String,
    required: true,
    unique: false
  },
  type: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: false,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  org: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Experience", expSchema);
