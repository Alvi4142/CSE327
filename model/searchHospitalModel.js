//connecting database
const {query} = require("../helper/db.js");



let getHospitalData = async (name) =>{
    sqlCommand = `SELECT hospital_id, name, address FROM hospital WHERE name LIKE "%${name}%" `;
    let result = await query(sqlCommand);
    console.log(result);
    return result; 

}



module.exports = {
    getHospitalData,
    
}
