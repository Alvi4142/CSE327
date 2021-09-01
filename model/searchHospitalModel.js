//connecting database
const {query} = require("../helper/db.js");



let getHospitalData = async (name) =>{
    sqlCommand = `SELECT id, name, address FROM doctor WHERE name LIKE "%${name}%" `;
    let result = await query(sqlCommand);
    console.log(result);
    return result; 

}



module.exports = {
    getHospitalData,
    
}
