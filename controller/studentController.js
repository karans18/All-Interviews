import studentModel from "../model/studentModel.js";

export const addStudent = async (req, res) => {
  await studentModel.insertMany(req.body);

  res.status(201).json({
    message: "Student Added",
  });
};

export const getStudent = async (req, res) => {
  const { minMarks, maxMarks, sort } = req.query;

  let filter = {};

  if (minMarks && maxMarks) {
    filter.marks = {
      $gte: Number(minMarks),
      $lte: Number(maxMarks),
    };
  } else if (minMarks) {
    filter.marks = {
      $gte: Number(minMarks),
    };
  } else if (maxMarks) {
    filter.marks = {
      $lte: Number(maxMarks),
    };
  }

  const order = sort === "desc" ? -1 : 1;

  const students = await studentModel.find(filter).sort({
    marks: order,
  });

  res.json(students);
};