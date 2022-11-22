const Exp = require('../models/expModel');
const { v4: uuidv4 } = require("uuid");

async function projList(email) {
    const projects = await Exp.find({ user: email, type: 'Proj' }).sort({ createdAt: -1 });
    return projects;
}

async function expList(email) {
    const experiences = await Exp.find({ user: email, type: 'Work' }).sort({ createdAt: -1 });
    return experiences;
}

async function addExp(exp) {
    try {
        const newExp = await Exp.create({
            user: exp.user,
            type: exp.type,
            id: uuidv4(),
            title: exp.title,
            org: exp.org,
            date: exp.date,
            text: exp.text,
        });
        return newExp;
    }
    catch (error) {
        console.log("Error creating new experience", error.message);
        console.log("new experience details: ", exp);
    }
}

async function editExp(exp) {
    try {
        const updatedExp = await Exp.replaceOne({id: exp.id}, {
            user: exp.user,
            type: exp.type,
            id: exp.id,
            title: exp.title,
            org: exp.org,
            date: exp.date,
            text: exp.text,
        });
    }
    catch (error) {
        console.log("Error updating experience", error.message);
        console.log("updated experience details: ", exp);
    }
}

module.exports = {
    projList,
    expList,
    addExp,
    editExp,
};