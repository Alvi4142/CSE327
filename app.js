//require express app
const express =require("express");
const app = express();



//setting up view engine
app.set("view engine","ejs");

//setting middlewares
app.use(express.static("./public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//importing routers
const loginRouter = require("./routers/loginRouter.js");
const enterRouter = require("./routers/enterRouter.js");

//using routers
app.use(loginRouter);
app.use(enterRouter);

//app.use((req,res) =>{
   // res.render("404.ejs")
//});

app.listen(3000,()=>{
    console.log("the server is up at localhost:3000")
});

