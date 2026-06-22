import mangeSchema from "../model/orderMangement.js";

export const addorder = async (req, res) => {
  await mangeSchema.insertMany(req.body);

  res.status(201).json({
    message: "Order Added",
  });
};

export const getOrder = async (req, res) => {
  const { status, sort } = req.query;

  let filter = {};

  if (status) {
    filter.status = status;
  }

  const order = sort === "desc" ? -1 : 1;
  const manage = await mangeSchema.find(filter).sort({
    status: order,
  });
  res.json(manage);
};
