const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const router = express.Router();

//Route of SignUp
router.post("/", handleUserSignup);
//Route for Login
router.post("/login", handleUserLogin);

module.exports = router;
