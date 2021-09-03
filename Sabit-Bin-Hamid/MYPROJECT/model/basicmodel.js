//connecting database
const {query} = require('../helper/db.js')


let insertPrescription = async (patient_name,patient_id,consultation_date,prescription) => {
    let sqlCommand = `INSERT INTO prescription(patient_name, patient_id,consultation_date,prescription)
                   VALUES ('${patient_name}','${patient_id}','${consultation_date}','${prescription}');`;
    let result = await query(sqlCommand);
    return result;
}


/**
 * 
 */
let getLines = async (uid) => {
    console.log('user id'+uid)
    let sqlCommand = `SELECT patient_name,patient_id,consultation_date,
                     prescription FROM prescription WHERE patient_id='${uid}';`;
    let result = await query(sqlCommand);
    console.log(result)
    return result
}

module.exports = {
    insertPrescription,
    getLines,
}