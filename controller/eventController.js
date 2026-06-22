import Event from "../model/eventModel.js";

export const addEvents = async (req, res) => {
  await Event.insertMany(req.body);
  res.json({
    message: "Event Added",
  });
};
export const getEvents = async (req, res) => {
  const { from, to, sort } = req.query;

  let filter = {};
  if (from && to) {
    filter.date = {
      $gte: from,
      $lte: to,
    };
  } else if (from) {
    filter.date = {
      $gte: from,
    };
  } else if (to) {
    filter.date = {
      $lte: to,
    };
  }

  const order = sort === "desc" ? -1 : 1;
  const events = await Event.find(filter).sort({
    date: order,
  });
  res.json(events);
};
