const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    locations: {
        type: Array,
        required: false,
    },
    companyPositions: {
        type: Array,
        required: false,
    },
    reviewids: {
        type: Array,
        required: false,
    },
}); 

module.exports = mongoose.model("Company", companySchema);



