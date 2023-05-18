const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');

const verifyToken = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const data = await userModel.findOne({ _id: result.userId })

      if (!data) {
        return res.status(400).json({ message: "User Not Found Auth" });
      }
      req.userId = data._id;
      next();
    } else {
      return res.status(400).json({ message: "No Token Found" });
    }
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(400).json({ message: "Token Expired" });
    } else {
      return res.status(400).json({ message: "Unauthorized Person" });
    }
  }
};

module.exports = verifyToken;
