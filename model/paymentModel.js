let { query } = require("../helper/db.js");

let getUserInfo = async (ID) =>{
    let sqlCommand = `SELECT user_id, name, email FROM user_info WHERE user_id = ${ID};`
    let result = await query(sqlCommand);
    return result;
}

let getCurrency = async (ID) =>{
    let sqlCommand = `SELECT currency FROM user_info WHERE user_id = ${ID};`
    let result = await query(sqlCommand);

    return parseInt(result[0].currency, 10);
}

let updateCurrency = async (ID, amount) =>{
    let sqlCommand = `UPDATE user_info SET currency = ${amount} WHERE user_id = ${ID};`
    let result = await query(sqlCommand);

    return result;
}



module.exports = {
    getUserInfo,
    getCurrency,
    updateCurrency
}