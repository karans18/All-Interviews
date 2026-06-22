import employeeSchema from "../model/emploeeModel.js";

export const addEmployee = async (req, res) => {
  await employeeSchema.insertMany(req.body);
  res.status(201).json({
    message: "Employee Added",
  });
};

export const getEmployee = async (req, res) => {
  const { department, minSalary, maxSalary, sort } = req.query;

  let filter = {};

  //Department

  if (department) {
    filter.department = department;
  }

  //salary

  if (minSalary || maxSalary) {
    filter.salary = {};
    if (minSalary) filter.salary.$gte = Number(minSalary);
    if (maxSalary) filter.salary.$lte = Number(maxSalary);
  }
  const order = sort === "desc" ? -1 : 1;
  const employee = await employeeSchema.find(filter).sort({
    salary: order,
  });
  res.json(employee);
};
