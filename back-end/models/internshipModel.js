const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const internshipSchema = new Schema(
  {
    id: {
      type: String,
      required: false,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
      required: false,
    },
    positionName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    locations: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Internship", internshipSchema);
