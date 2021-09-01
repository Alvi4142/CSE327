const searchDoctorModel = require("../model/searchDoctorModel.js");

let searchDoctor = async (req , res)=>
{
    console.log(req.body);
    
    let searchQuery = req.body.q;
    let searchresult = await searchDoctorModel.getDoctorData(searchQuery);
    let pageTitle = "Doctor Search";
    let title ="Doctors's List"
    let data = {
      pageTitle,
      title,
      searchresult
    };
    res.render("searchDoctor.ejs" , { data });
}

let homeDoctor =  (req, res) =>{
  // let names = ["Mahin", "Alvi", "User1"];

  //let lines = await basicModel.getLines();

  let pageTitle = "Doctor Search";
  let title ="Doctors's List"
  let data = {
      pageTitle,
      title 
  }
  res.render("searchDoctor.ejs", {data});
}

module.exports =
{
  searchDoctor,
  homeDoctor 
}