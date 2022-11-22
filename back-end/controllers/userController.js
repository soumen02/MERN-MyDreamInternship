const User = require("../models/userModel");

async function getUser(id) {
    const user = await User.findById(id);
    return user;
}

async function getUserByEmail(email) {
    const user = await User.findOne({ email: email })
    return user;
}

module.exports = {
    getUser,
    getUserByEmail
};