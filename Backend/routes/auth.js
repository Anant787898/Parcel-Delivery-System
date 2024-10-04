const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const router = express.Router();
const dotenv = require("dotenv");


dotenv.config();

//REGISTRATION
router.post("/register", registerUser);

//LOGIN
router.post("/login", loginUser);

module.exports = router;
