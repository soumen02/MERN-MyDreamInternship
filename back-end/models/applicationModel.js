const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicationSchema = new Schema(
  {
    user: {
        type: String,
        required: true,
    },
    internshipID: {
        type: String,
        required: true,
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
    locations: {
      type: String,
      required: false,
    },
    status: {
        type: String,
        required: true,
    },
    reviews: {
        type: String,
        required: false,
    },
    notes: {
        type: Array,
        required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
