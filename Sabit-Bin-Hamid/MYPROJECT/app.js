/**
 * Required for express app
 */
const express = require('express');
const app = express();

/**
 * Setting up view engine.
 */
app.set('view engine', 'ejs');

/**
 * Setting middlewares.
 */
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Importing routrs.
 */
const prescriptionRouter = require('./routers/prescriptionRouter.js');

/**
 * Using routers
 */
app.use(prescriptionRouter)

/**
 * For any undefined action in browser this will show an error
 * and render 404.ejs.
 */
app.use((req, res) => {
    res.render('404.ejs')
})

/**
 * Here server connection is create and port is 3000.
 */
app.listen(3000, (err) => {
    console.log('the surver is up at localhost:3000')
})