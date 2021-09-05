const express = require("express");
const router = express.Router();

//getting controllers
const entercontroller= require("../controllers/enterController.js");

router.get("/home",entercontroller.enterlogin);

module.exports = router;