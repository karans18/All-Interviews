import productsModel from "../model/productsModel.js";

export const addProduct = async (req, res) => {
  await productsModel.insertMany(req.body);
  res.status(201).json({
    message: "product added",
  });
};


export const getProduct=async (req,res) => {
    const {minPrice}=req.query
    
}