const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const cheerio = require("cheerio");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
// var cors = require('cors');
const mystery = "https://github.com/pittcsc/Summer2023-Internships";
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

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
// app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});


app.get("/get_companies", async (req, res) => {
  let companiesToPositions = await scrape(mystery);
  res.send(companiesToPositions);
  let companies = [];
  companiesToPositions.map((company) => {
      let companyobj = {
        companyName: company.companyName,
        url: company.url,
        locations: company.locations,
      };
      companies.push(companyobj);
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

let workExp = [
  { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { title: 'Research Assistant', org: 'New York University', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
];
let proj = [
  { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { title: 'Hello World', org: 'Python', date:'Aug 2021 - Dec 2021', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
];

app.get("/get_expArr", async(req, res) => {
  let exp3 = [workExp, proj]
  res.send(exp3);
});


app.post("/get_work", jsonParser, async(req, res) => {
  workExp.push(req.body.entry);
  res.send(req.body.entry);
});

app.post("/get_proj", jsonParser, async(req, res) => {
  proj.push(req.body.entry);
  res.send(req.body.entry);
});


app.post("/get_proj", jsonParser, async(req, res) => {
  console.log(req.body.proj);
});

app.post("/post_review", async (req, res) => {
  console.log(req.body);
});

app.post("/get_login", jsonParser, (req, res) => {
  if (req.body.params.password == "password") {
    res.send("success");
  }
  else {
    res.send("failure");
  }
});

module.exports = app;
