const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const cheerio = require("cheerio");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const mystery = "https://github.com/pittcsc/Summer2023-Internships";
const profLink = "https://app.joinhandshake.com/stu/users/26073328"

async function scrapeProf(url) {
  let fields = [];
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const elemSelector =
      "style__flex___fCvpa > style__media-body___MV2ef";
    $(elemSelector).each((parentIdx, parentElem) => {
      const orgElem = $(parentElem).children()[0];
      const titleElem = $(parentElem).children()[1];
      const dateElem = $(parentElem).children()[2];
      const textElem = $(parentElem).children()[3];

      const companyNameElem = $(parentElem).children()[0];
      const locationsElem = $(parentElem).children()[1];
      const positionsElem = $(parentElem).children()[2];

      let profData = {};
      profData["companyName"] = $(companyNameElem).text();
      if ($(companyNameElem).children().length > 0) {
        profData["defaultPositionUrl"] = $(companyNameElem)
          .find("a")
          .attr("href");
      }
      profData["locations"] = $(locationsElem).text();
      profData["positions"] = [];
      $(positionsElem)
        .contents()
        .each((posIdx, posElem) => {
          if (posElem.type === "text") {
            profData["positions"].push({
              id: uuidv4(),
              title: $(posElem).text(),
              url: profData["defaultPositionUrl"],
            });
          } else if (posElem.type === "tag" && posElem.name === "a") {
            profData["positions"].push({
              id: uuidv4(),
              title: $(posElem).text(),
              url: posElem.attribs["href"],
            });
          }
        });
      fields.push(profData);

    });
  } catch (error) {
    return fields;
  }
  return fields;

}

async function scrape(url) {
  let companiesWithPositions = [];
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const elemSelector =
      "#readme > div.Box-body.px-5.pb-5 > article > table > tbody > tr";
    $(elemSelector).each((parentIdx, parentElem) => {
      const companyNameElem = $(parentElem).children()[0];
      const locationsElem = $(parentElem).children()[1];
      const positionsElem = $(parentElem).children()[2];
      if (
        !$(positionsElem).text().includes("Closed") &&
        !$(locationsElem).text().includes("Closed")
      ) {
        let companyData = {};
        companyData["companyName"] = $(companyNameElem).text();
        if ($(companyNameElem).children().length > 0) {
          companyData["defaultPositionUrl"] = $(companyNameElem)
            .find("a")
            .attr("href");
        }
        companyData["locations"] = $(locationsElem).text();
        companyData["positions"] = [];
        $(positionsElem)
          .contents()
          .each((posIdx, posElem) => {
            if (posElem.type === "text") {
              companyData["positions"].push({
                id: uuidv4(),
                title: $(posElem).text(),
                url: companyData["defaultPositionUrl"],
              });
            } else if (posElem.type === "tag" && posElem.name === "a") {
              companyData["positions"].push({
                id: uuidv4(),
                title: $(posElem).text(),
                url: posElem.attribs["href"],
              });
            }
          });
        companiesWithPositions.push(companyData);
      }
    });
  } catch (error) {
    return companiesWithPositions;
  }
  return companiesWithPositions;
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/get_companies", async (req, res) => {
  let companiesToPositions = await scrape(mystery);
  let companies = [];
  companiesToPositions.map((company) => {
      let company = {
        companyName: company.companyName,
        url: position.url,
        locations: company.locations,
      };
      companies.push(company);
    });
  res.send(companies);
});

app.get("/get_internships", async (req, res) => {
  let companiesToPositions = await scrape(mystery);
  let internships = [];
  companiesToPositions.map((company) => {
    company.positions.map((position) => {
      let internship = {
        id: position.id,
        companyName: company.companyName,
        positionName: position.title,
        url: position.url,
        locations: company.locations,
      };
      internships.push(internship);
    });
  });
  // console.log(companiesToPositions);
  res.send(internships);
});

app.get("/get_profile", async (req, res) => {
  let companiesToPositions = await scrape(mystery);
  let companies = [];
  companiesToPositions.map((company) => {
      let company = {
        companyName: company.companyName,
        url: position.url,
        locations: company.locations,
      };
      companies.push(company);
    });
  res.send(companies);
});

module.exports = app;
