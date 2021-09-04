/**
 * Importing path of model and getting model.
 */
const basicModel = require('../model/basicModel');

let doctorPrescription = (req, res) => {
    let pageTitle = 'prescription';
    let data = {
        pageTitle,
    }
    res.render('doctorprescription.ejs', { data });
}


let viewPrescription = async (req, res) => {
    // console.log(req.params)
    let lines = await basicModel.getLines(req.params.id);
    console.log(lines)
    let pageTitle = 'viewprescription';
    let data = {
        pageTitle,
        lines,
    }
    res.render('viewprescription.ejs', { data });
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
let insertInformation = async (req, res) => {
    let infoName = req.body.name;
    let infoId = req.body.id;
    let infoDate = req.body.date;
    let infoDetail = req.body.detail;
    let information = await basicModel.insertPrescription(infoName, infoId, infoDate,infoDetail);
    res.redirect('/prescription',);
};


/**
 * Export doctorPrescription,viewPrescription and insertInformation function.
 */
module.exports = {

    doctorPrescription,
    viewPrescription,
    insertInformation,

}
