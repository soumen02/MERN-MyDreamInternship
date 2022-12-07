const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const internshipController = require("../controllers/internshipController");

const router = express.Router();

// require auth for all workout routes
// router.use(requireAuth);

router.get("/get_internships", async (req, res) => {
  const internships = await internshipController.getInternships();
  res.status(200).send(internships);
});

router.post("/get_internshipbyid", async (req, res) => {
  const internship = await internshipController.getCompanyInternship(
    req.body.id
  );
  res.send(internship);
});

router.post("/search_internships", async (req, res) => {
  const internships = await internshipController.searchInternships(
    req.body.params.searchTerm
  );
  res.status(200).send(internships);
});

router.post("/get_company_internships", async (req, res) => {
  const internships = [];
  const ids = req.body.companyPositions;
  for (i = 0; i < ids.length; i++) {
    const internship = await internshipController.getCompanyInternship(ids[i]);

    internships.push(internship);
  }
  res.send(internships);
});

module.exports = router;
