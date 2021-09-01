const express = require('express');
const router = express.Router();

// getting controllers
const basicController = require('../controllers/basicController.js');

router.get('/prescription', basicController.doctorPrescription);
router.get('/viewprescription', basicController.viewPrescription);
router.post('/prescription', basicController.insertInformation);

module.exports = router;