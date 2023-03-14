import User from "../models/User.js";
import { successCode, failCode, errorCode } from "../utils/response.js";
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findById(id);
    if (data) {
      successCode(res, data);
    } else {
      errorCode(res, "Not Find User");
    }
  } catch (error) {
    failCode(res);
  }
};

export { getUser };
