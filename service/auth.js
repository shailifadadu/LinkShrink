const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

const secret = process.env.JWT_SECRET; 
const expiry = process.env.JWT_EXPIRY;

//making tokens for user
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret,
    { expiresIn: expiry } 
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
