//connecting database
const {query} = require("../helper/db.js");



let getDoctorData = async (name) =>{
    sqlCommand = `SELECT doc_id, doc_name, subject, chamber1 FROM doc_info WHERE doc_name LIKE "%${name}%" `;
    let result = await query(sqlCommand);
    console.log(result);
    return result; 

}



module.exports = {
    getDoctorData,
    
}
