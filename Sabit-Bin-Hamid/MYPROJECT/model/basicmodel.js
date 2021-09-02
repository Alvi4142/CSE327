//connecting database
const {query} = require('../helper/db.js')


let insertPrescription = async (name,date,prescription) => {
    let sqlCommand = `INSERT INTO doc_presc(name, date, prescription) VALUES (
        '${name}','${date}','${prescription}');`;
    let result = await query(sqlCommand);
    return result;
}


/**
 * 
 */
let getLines = async (name,date,prescription) => {
    let sqlCommand = `SELECT name, date, prescription FROM doc_presc WHERE name='${name}';`;
    let result = await query(sqlCommand);
    return result;
}

let getUserName =  (name) => {
    let sqlCommand = `SELECT name FROM user WHERE 1;`;
    let result =  query(sqlCommand);
    return result;
}

module.exports = {
    insertPrescription,
    getLines,
    getUserName,
}