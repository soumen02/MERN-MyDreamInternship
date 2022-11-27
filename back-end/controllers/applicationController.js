const Application = require("../models/applicationModel");

// get all Applications
async function getApplications(email) {
    const applications = await Application.find({user:email}).sort({ createdAt: -1 });
    return applications;
}

// create a new Application
async function addApplication(application) {
    const { user, internshipID, companyName, companyLogo, positionName, locations, status } =
    application;
    try {
    const newApplication = await Application.create({
        user,
        internshipID,
        companyName,
        companyLogo,
        positionName,
        locations,
        status,
        reviews: "test review",
    });
    } catch (error) {
    console.log("Error creating new Application", error.message);
    console.log("new Application details: ", application);
    };
}

module.exports = {
    getApplications,
    addApplication,
};