const Review = require("../models/reviewModel");
// get review using id
async function getReview(id) {
  const review = await Review.findById(id);
  return review;
}


async function addReview(Data) {
  const { user, company, review, rating, position, date } = Data;
  try {
    const newReview = await Review.create({
      user,
      company,
      review,
      rating,
      position,
      date,
    });
  } catch (error) {
    console.log("Error creating new review", error.message);
    console.log("new review details: ", review);
  }
}



module.exports = {
  getReview,
  addReview,
};
