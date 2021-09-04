/**
 * Connecting to database.
 */
const {query} = require('../helper/db.js')

/**
 * This function will insert  Prescription details in database given by doctor.
 * @param {string} patientName - target is insert patient name in database
 * @param {string} patientId - target is insert patientId in database
 * @param {string} consultationDate - target is consultationDate insert in database
 * @param {string} prescription - target is insert patient prescription in database
 * @returns {string} the patient prescription 
 */
let insertPrescription = async (patientName,patientId,consultationDate,prescription) => {
    let sqlCommand = `INSERT INTO prescription(patient_name, patient_id,consultation_date,prescription)
                   VALUES ('${patientName}','${patientId}','${consultationDate}','${prescription}');`;
    let result = await query(sqlCommand);
    return result;
}

/**
 * This function fetch data from database prescription table according to user id.
 * @param {string} userid - target is user get prescriptin according this id 
 * @returns {string} user id
 */
let getLines = async (userid) => {
    console.log('user id'+userid)
    let sqlCommand = `SELECT patient_name,patient_id,consultation_date,
                     prescription FROM prescription WHERE patient_id='${userid}';`;
    let result = await query(sqlCommand);
    console.log(result)
    return result
}

/**
 * Export insertPrescription and getLines function
 */
module.exports = {
    insertPrescription,
    getLines,
}