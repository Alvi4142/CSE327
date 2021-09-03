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
let getLines = async (uid) => {
    console.log('user id'+uid)
    let sqlCommand = `SELECT doc_name,patient_id,consultation_date,
                     prescription FROM doc_presc WHERE patient_id='${uid}';`;
    let result = await query(sqlCommand);
    console.log(result)
    return result
}

module.exports = {
    insertPrescription,
    getLines,
}