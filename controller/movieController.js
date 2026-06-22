import movieModel from "../model/movieModel.js";

export const addMovie = async (req, res) => {
  await movieModel.insertMany(req.body);
  res.status(201).json({
    message: "Movie added ",
  });
};

export const getMovie = async (req, res) => {
  const { year, maxYear, minYear, rating, minRating, maxRating, sort } =
    req.query;

  let filter = {};
  //   if (year) {
  //     filter.year = Number(year);
  //   } else if (minYear && maxYear) {
  //     filter.year = {
  //       $gte: Number(minYear),
  //       $lte: Number(maxYear),
  //     };
  //   } else if (minYear) {
  //     filter.year = {
  //       $gte: Number(minYear),
  //     };
  //   } else if (maxYear) {
  //     filter.year = {
  //       $lte: Number(maxYear),
  //     };
  //   }
  if (minYear || maxYear) {
    filter.year = {};

    if (minYear) filter.year.gte = Number(minYear);

    if (maxYear) ilter.year.gte = Number(minYear);
  }

  //rating
  //   if (rating) {
  //     filter.ratings = Number(rating);
  //   } else if (minRating && maxRating) {
  //     filter.ratings = {
  //       $gte: Number(minRating),
  //       $lte: Number(maxRating),
  //     };
  //   } else if (minRating) {
  //     filter.ratings = {
  //       $gte: Number(minRating),
  //     };
  //   } else if (maxRating) {
  //     filter.ratings = {
  //       $lte: Number(maxRating),
  //     };
  //   }

  if (minRating && maxRating) {
    rating.filter = {};
    if (minRating) filter.rating.$gte = Number(minRating);
    if (maxRating) filter.rating.$lte = Number(minRating);
  }

  const order = sort === "desc" ? -1 : 1;
  const movie = await movieModel.find(filter).sort({
    ratings: order,
    year: order,
  });
  res.json(movie);
};
