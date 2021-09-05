/**
 * 
 * @param {object} req - passing req datas
 * @param {object} res - passing res datas
 */
//entering to homepage from login page
let home = (req,res) =>{
    let pageTitle = "home";
    let data = {
       
        pageTitle
    }
    res.render("home.ejs",{data});
}

module.exports = {
   home
}