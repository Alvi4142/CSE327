//getting model
const basicmodel = require('../model/basicmodel');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
let doctorPrescription = (req, res) => {
    let pageTitle = 'prescription';
    let data = {
        pageTitle,
    }
    res.render('doctorprescription.ejs', { data });
}


let viewPrescription = async (req, res) => {

    let lines = await basicmodel.getLines('Sabit-Bin-Hamid');
    console.log(lines)
    let pageTitle = 'viewprescription';
    let data = {
        pageTitle,
        lines,
    }
    res.render('viewprescription.ejs', { data });
};


let insertInformation = async (req, res) => {
    let info = req.body.name;
    let info1 = req.body.date;
    let info2 = req.body.test;
    let information = await basicmodel.insertPrescription(info, info1, info2);
    res.redirect('/prescription',);
};



module.exports = {

    doctorPrescription,
    viewPrescription,
    insertInformation,

}
