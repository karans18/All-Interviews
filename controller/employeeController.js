import employeeSchema from "../model/emploeeModel.js";

export const addEmployee = async (req, res) => {
  await employeeSchema.insertMany(req.body);
  res.status(201).json({
    message: "Employee Added",
  });
};
