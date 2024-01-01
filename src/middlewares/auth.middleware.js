const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken || req.header("Authorization")?.split(" ")[1];
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = User.findById(decodedToken._id).select(
      "-password refreshToken"
    );
    if (!user) {
      //Discusion about frontend
      throw new ApiError(401, "Invalid access token");
    }
    req.user = user;
  } catch (error) {
    throw new ApiError(401, "Invalid access token");
  }
  next();
});
module.exports = verifyJWT;
