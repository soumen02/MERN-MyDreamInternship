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
    companyDescription: {
        type: String,
        required: false,
    },
    url: {
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
}); 

module.exports = mongoose.model("Company", companySchema);



