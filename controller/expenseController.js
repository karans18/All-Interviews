import expenseTracker from "../model/expenseTracker.js";

export const addExpense = async (req, res) => {
  await expenseTracker.insertMany(req.body);
  res.status(201).json({
    message: "Expense Added",
  });
};
export const getExpense = async (req, res) => {
  const { from, to, sort } = req.query;

  let filter = {};

  if (from || to) {
    filter.date = {};
    if (from) filter.date.$gte = from;
    if (to) filter.date.$lte = to;
  }

  const order = sort === "desc" ? -1 : 1;
  const expense = await expenseTracker.find(filter).sort({
    date: order,
  });
  res.json(expense);
};
