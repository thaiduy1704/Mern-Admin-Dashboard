import { successCode, failCode, errorCode } from "../utils/response.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithStat = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    if (productsWithStat) {
      successCode(res, productsWithStat);
    } else {
      failCode(res, "Not Find Product");
    }
  } catch (error) {
    failCode(res);
  }
};
export { getProduct };
