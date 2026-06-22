import mongoose from "mongoose";


const employeeSchema=new mongoose.Schema({
    name:String,
    department:String,
    salary:Number,

})