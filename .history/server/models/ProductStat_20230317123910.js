import mongoose from "mongoose";

const ProductStatScheme = new mongoose.Schema({
  productId: String,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  year: Number,
});
