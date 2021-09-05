
let enterlogin = (req,res) =>{
    let pageTitle = "home";
    let data = {
       
        pageTitle
    }
    res.render("enter.ejs",{data});
}

module.exports = {
    enterlogin : enterlogin
}