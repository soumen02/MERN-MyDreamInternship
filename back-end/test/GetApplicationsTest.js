const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("TEST API: get_applications", () => {
  it("It should fetch all the applications", function (done) {
    chai
      .request(server)
      .get("/get_applications")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        assert.equal(typeof res.body, "object");
        done();
      });
  });
});