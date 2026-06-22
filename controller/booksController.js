import booksModel from "../model/booksModel.js";

export const addBooks = async (req, res) => {
  await booksModel.insertMany(req.body);
  res.status(201).json({
    message: "Add a Book",
  });
};

export const getBooks = async (req, res) => {
  const { author, price, minPrice, maxPrice, sort } = req.query;

  let filter = {};
  //Author
  if (author) {
    filter.author = author;
  }
  //price
  if (price) {
    filter.price = Number(price);
  } else if (minPrice || maxPrice) {
    filter.price = {};

    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }
  const order = sort === "desc" ? -1 : 1;
  const books = await booksModel.find(filter).sort({
    price: order,
  });
  res.json(books);
};
