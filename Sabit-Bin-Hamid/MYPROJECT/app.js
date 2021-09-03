//required express app
const express = require('express');
const app = express();

//setting up view engine
app.set('view engine', 'ejs');


//setting middlewares
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//importing routrs
const prescriptionRouter = require('./routers/prescriptionRouter.js');
//using routers
app.use(prescriptionRouter)


//Show werror for undefine action
app.use((req, res) => {
    res.render('404.ejs')
})


//server connection
app.listen(3000, (err) => {
    console.log('the surver is up at localhost:3000')
})