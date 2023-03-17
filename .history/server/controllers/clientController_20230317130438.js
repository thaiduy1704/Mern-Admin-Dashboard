import { successCode, failCode, errorCode } from "../utils/response.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithStat = await Promise.all(products.map(async(product)=>{
        const stat = await ProductStat.find({
          productId: product._id,

        })
    });
  } catch (error) {}
};
