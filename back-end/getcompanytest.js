const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("TEST API- profilePage", () => {
  /**
   * Test the GET route for profilePage
   */
  describe("GET request to /get_companies", () => {
    it("It should GET all the company information", (done) => {
      chai
        .request(server)
        .get("/get_internships")
      .end((err, res) => {
          res.body.should.be.a("array");
        });
    });
  });
});


// it('assertion success', async () => {
//     const result = await resolvingPromise;
//     expect(result).to.equal('promise resolved'); 
//   });