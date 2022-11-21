const Company = require('../models/companyModel');

async function getCompanies() {
    const companies = await Company.find({}).sort({ createdAt: -1 });
    return companies;
}

async function checkIfExists(company) {
    const { companyName} = company;
    const result = await Company.findOne({
        companyName: companyName,
    });
    return result !== null;
}

async function addCompanies(companies) {
    companies.forEach(async (company) => {
        const { companyName, logo, companyDescription, url,companyPositions,locations } = company;
        try {
            const newCompany = await Company.create({
                companyName,
                logo,
                companyDescription,
                url,
                locations,
                companyPositions
            });
        } catch (error) {
            console.log("Error creating new company", error.message);
            console.log("new company details: ", company);
        }
    });
}

module.exports = {
    getCompanies,
    checkIfExists,
    addCompanies,
};