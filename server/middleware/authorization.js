const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    //1. desctructure

    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Unauthorize access.");
    }

    //check if token is valid
    const payload = jwt.verify(jwtToken, process.env.jwtsecret);

    req.user = payload.user;
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Unauthorize access.");
  }
};
