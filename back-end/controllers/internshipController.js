const Internship = require("../models/internshipModel");

// get all Internship positions
async function getInternships() {
  const internships = await Internship.find({}).sort({ createdAt: -1 });
  return internships;
}

// check if Internship exists
async function checkIfExists(internship) {
  const { id, companyName, companyLogo, positionName, url, locations } =
    internship;
  const result = await Internship.findOne({
    companyName: companyName,
    positionName: positionName,
    url: url,
  });
  return result !== null;
}

// add Internship positions
async function addInternships(internships) {
  internships.forEach(async (internship) => {
    const { id, companyName, companyLogo, positionName, url, locations } =
      internship;
    try {
      const newInternship = await Internship.create({
        id,
        companyName,
        companyLogo,
        positionName,
        url,
        locations,
      });
    } catch (error) {
      console.log("Error creating new Internship position", error.message);
      console.log("new Internship details: ", internship);
    }
  });
}

module.exports = {
  getInternships,
  checkIfExists,
  addInternships,
};
