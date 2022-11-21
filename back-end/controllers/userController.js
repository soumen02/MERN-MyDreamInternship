const User = require("../models/userModel");

async function getUser(id) {
    const user = await User.findById(id);
    return user;
}

module.exports = {
    getUser,
};