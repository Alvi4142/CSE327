/**
 * Required for express app
 */
const express = require('express');
const router = express.Router();


/**
 * Getting controllers.
 */
const basicController = require('../controllers/prescriptionController.js');

/**
 * Define the prescription page route and go respective function.
 */
router.get('/prescription', basicController.doctorPrescription);
router.get('/viewprescription/:id', basicController.viewPrescription);
router.post('/prescription', basicController.insertInformation);

/**
 * Exports router
 */
module.exports = router;