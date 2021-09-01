const express = require("express");
const router = express.Router();

//getting controllers
const searchMedicineController = require("../controllers/searchMedicineController.js");

router.get("/searchMedicine", searchMedicineController.homeMedicine);
router.post("/searchMedicine", searchMedicineController.searchMedicine);




module.exports = router;