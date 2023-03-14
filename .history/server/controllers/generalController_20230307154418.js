import User from "../models/User.js";
import { successCode, failCode, errorCode } from "../utils/response.js";
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findById(id);
  } catch (error) {
    failCode(res);
  }
};
