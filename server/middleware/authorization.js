const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    //1. desctructure
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("no token");
    }

    //check if token is valid
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("You are not authorized.");
  }
};
