//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the controllers
const paymentController = require("../controllers/paymentController.js");

router.get("/payform", paymentController.showPayForm);
router.post("/paymentform", paymentController.pay);
router.post("/payment", paymentController.payment);


module.exports = router;