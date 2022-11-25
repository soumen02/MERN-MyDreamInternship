const Application = require("../models/applicationModel");

// get all Applications
async function getApplications() {
    const applications = await Application.find({}).sort({ createdAt: -1 });
    return applications;
}

// create a new Application
async function addApplication() {
    const { id, userID, internshipID, companyName, companyLogo, positionName, locations, status, reviews } =
    application;
    try {
    const newApplication = await Application.create({
        id,
        userID,
        internshipID,
        companyName,
        companyLogo,
        positionName,
        locations,
        status,
        reviews,
    });
    } catch (error) {
    console.log("Error creating new Application position", error.message);
    console.log("new Application details: ", application);
    };
}