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
        const { companyName, logo, companyDescription, url,companyPositions,locations,reviewids } = company;
        try {
            const newCompany = await Company.create({
                companyName,
                logo,
                companyDescription,
                url,
                locations,
                companyPositions,
                reviewids
            });
        } catch (error) {
            console.log("Error creating new company", error.message);
            console.log("new company details: ", company);
        }
    });
}

//update company reviews
async function updateCompanyReviews(companyid,reviewid) {
    const company = await Company.findOneAndUpdate({companyid},{$push:{reviewids: reviewid}});
    console.log(reviewid);
    console.log(company);
}

async function searchCompanies(searchTerm) {
    // partial search for company name in the database
    const regex = new RegExp(searchTerm, "i");
    const companies = await Company.find({
        companyName: regex,
    }).sort({ createdAt: -1 });
    
      return companies;
    }

module.exports = {
    getCompanies,
    checkIfExists,
    addCompanies,
    updateCompanyReviews,
    searchCompanies
};