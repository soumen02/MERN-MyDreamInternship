const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("TEST API: get_internships", () => {
  it("It should fetch all the internships", function (done) {
    chai
      .request(server)
      .get("/get_internships")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        assert.equal(typeof res.body, "object");
        done();
      });
  });
});
