const searchHospitalModel = require("../model/searchHospitalModel.js");

let searchHospital = async (req , res)=>
{
    console.log(req.body);
    
    let searchQuery = req.body.q;
    let searchresult = await searchHospitalModel.getHospitalData(searchQuery);
    let pageTitle = "Hospital Search";
    let title ="Hospital's List"
    let data = {
      pageTitle,
      title,
      searchresult
    };
    res.render("hospitalsearch.ejs" , { data });
}

let homeHospital =  (req, res) =>{
  // let names = ["Mahin", "Alvi", "User1"];

  //let lines = await basicModel.getLines();

  let pageTitle = "Hospital Search";
  let title ="Hospital's List"
  let data = {
      pageTitle,
      title 
  }
  res.render("hospitalsearch.ejs", {data});
}

module.exports =
{
  searchHospital,
  homeHospital 
}