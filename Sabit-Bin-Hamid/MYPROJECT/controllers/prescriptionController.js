/**
 * Include prescriptionMode.js external modules that exist in module files.
 */
const basicModel = require('../model/prescriptionModel');


/**
 * Doctor prescription HTTP render doctorprescription.ejs
 * @param {Request} req - Not use here. 
 * @param {Respose} res - Send the rendered view to the client and pass a local
 * variable Page title and data to the view , response 200. 
 */
let doctorPrescription = (req, res) => {
    
    let pageTitle = 'prescription';
    let data = {
        pageTitle,
    }
    res.render('doctorprescription.ejs', { data });
}


/**
 * Patient view prescription according id
 * @param {Request} req - Returns the value of params id when present.
 * @param {Respose} res - Send the rendered view to the client and pass  local
 *  variable to the view successfully response 200.
 */
let viewPrescription = async (req, res) => {
    let prescription = await basicModel.getPrescription(req.params.id);
    console.log(prescription)
    let pageTitle = 'viewprescription';
    /**
     * @type {object} data
     * @type {{ pageTitle: string , prescription: string}}
     */
    let data = {
        pageTitle,
        prescription,
    }
    res.render('viewprescription.ejs', { data });
};

/**
 * Get Information and prescription of patient post by doctor. 
 * @param {Request} req - No description.
 * @param {Response} res - Redirects to the URL derived from the specified path, 
 * with specified status, 200 HTTP status code. If not specified, status defaults to “404 “Found”.
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
