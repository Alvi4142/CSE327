//getting model
const basicmodel = require('../model/basicModel');

let doctorPrescription = (req, res) => {
    let pageTitle = 'prescription';
    let data = {
        pageTitle,
    }
    res.render('doctorprescription.ejs', { data });
}


let viewPrescription = async (req, res) => {

    let lines = await basicmodel.getLines();
    console.log(lines)
    let pageTitle = 'viewprescription';
    let data = {
        pageTitle,
        lines,
    }
    res.render('viewprescription.ejs', { data });
};


let insertInformation = async (req, res) => {
    let infoName = req.body.name;
    let infoId = req.body.id;
    let infoDate = req.body.date;
    let infoDetail = req.body.detail;
    let information = await basicmodel.insertPrescription(infoName, infoId, infoDate,infoDetail);
    res.redirect('/prescription',);
};



module.exports = {

    doctorPrescription,
    viewPrescription,
    insertInformation,

}
