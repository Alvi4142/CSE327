//connecting database
const {query} = require('../helper/db.js')


let insertPrescription = async (doc_name,patient_id,consultation_date,prescription) => {
    let sqlCommand = `INSERT INTO doc_presc(doc_name, patient_id,consultation_date,prescription)
                   VALUES ('${doc_name}','${patient_id}','${consultation_date}','${prescription}');`;
    let result = await query(sqlCommand);
    return result;
}


/**
 * 
 */
let getLines = async (doc_name,patient_id,consultation_date,prescription) => {
    let sqlCommand = `SELECT doc_name,patient_id,consultation_date,
                     prescription FROM doc_presc;`;
    let result = await query(sqlCommand);
    return result;
}

// let getUserName = async (name) => {
//     let sqlCommand = `SELECT name FROM user WHERE id='43434';`;
//     let result = await query(sqlCommand);
//     return result;
// }

module.exports = {
    insertPrescription,
    getLines,
    // getUserName,
}