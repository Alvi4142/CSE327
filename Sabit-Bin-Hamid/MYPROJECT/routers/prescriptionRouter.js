const express = require('express');
const router = express.Router();


/**
 * Getting controllers.
 */
const basicController = require('../controllers/basicController.js');

/**
 * 
 */
router.get('/prescription', basicController.doctorPrescription);
router.get('/viewprescription/:id', basicController.viewPrescription);
router.post('/prescription', basicController.insertInformation);

module.exports = router;