const express = require("express");
const router = express.Router();

//getting controllers
const searchHospitalController = require("../controllers/searchHospitalController.js");

router.get("/searchHospital", searchHospitalController.homeHospital);
router.post("/searchHospital", searchHospitalController.searchHospital);



module.exports = router;