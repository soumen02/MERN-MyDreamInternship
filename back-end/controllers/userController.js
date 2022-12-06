const User = require("../models/userModel");

async function getUser(id) {
    const user = await User.findById(id);
    return user;
}

async function getUserByEmail(email) {
    const user = await User.findOne({ email: email })
    return user;
}

async function editUser(entry) {
    try {
        const newUser = await User.replaceOne({email: entry.email}, {
            email: entry.email,
            password: entry.password,
            firstName: entry.firstName,
            lastName: entry.lastName,
            gradDate: entry.gradDate,
            gpa: entry.gpa,
            uni: entry.uni,
            photo: entry.photo
        });
    }
    catch (error) {
        console.log("Error updating user", error.message);
        console.log("updated user details: ", entry);
    }
}

module.exports = {
    getUser,
    getUserByEmail,
    editUser
};