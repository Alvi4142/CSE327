const searchMedicineModel = require("../model/searchMedicineModel.js");

let searchMedicine = async (req , res)=>
{
    console.log(req.body);
    
    let searchQuery = req.body.q;
    let searchresult = await searchMedicineModel.getMedicineData(searchQuery);
    let pageTitle = "Medicine Search";
    let title ="Medicine's List"
    let data = {
      pageTitle,
      title,
      searchresult
    };
    res.render("searchMedicine.ejs" , { data });
}

let homeMedicine =  (req, res) =>{
  // let names = ["Mahin", "Alvi", "User1"];

  //let lines = await basicModel.getLines();

  let pageTitle = "Medicine Search";
  let title ="Medicine's List"
  let data = {
      pageTitle,
      title 
  }
  res.render("searchMedicine.ejs", {data});
}

module.exports =
{
  searchMedicine,
  homeMedicine 
}