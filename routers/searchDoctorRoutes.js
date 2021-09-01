const express = require("express");
const router = express.Router();

//getting controllers
const searchDoctorController = require("../controllers/searchDoctorController.js");

router.get("/searchDoctor", searchDoctorController.homeDoctor);
router.post("/searchDoctor", searchDoctorController.searchDoctor);
//router.get("/hospitalsearch",basicControllers.hospitalSearch);



module.exports = router;