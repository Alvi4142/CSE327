const express = require("express");
const router = express.Router();
/**
 * routing controller
 */
//getting controllers
const homecontroller= require("../controllers/homeController.js");

router.get("/home",homecontroller.home);

module.exports = router;