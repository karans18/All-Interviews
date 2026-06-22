import productsModel from "../model/productsModel.js";

export const addProduct = async (req, res) => {
  await productsModel.insertMany(req.body);
  res.status(201).json({
    message: "product added",
  });
};

export const getProduct = async (req, res) => {
  const { minPrice, maxPrice, sort } = req.query;

  let filter = {};
  if (minPrice && maxPrice) {
    filter.price = {
      $gte: Number(minPrice),
      $lte: Number(maxPrice),
    };
  } else if (minPrice) {
    filter.price = {
      $gte: Number(minPrice),
    };
  } else if (maxPrice) {
    filter.price = {
      $lte: Number(maxPrice),
    };
  }

  const order = sort === "desc" ? -1 : 1;
  const product = await productsModel.find(filter).sort({ price: order });
  res.json(product);
};
