const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("TEST API- ReviewPage", () => {
  it("It should fetch all the review details submitted by the user", function (done) {
    chai
      .request(server)
      .post("/post_reviews")
      .end((err, req) => {
        // res.should.have.status(200);
        // console.log(req.body)
        // console.log(err)
        req.body.should.be.a("object");
        req.body.should.have.property("data");
        assert.equal(typeof req.body, "object");
        done();
      });
  });
});
