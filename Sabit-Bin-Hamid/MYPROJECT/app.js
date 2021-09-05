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
 * Setting for middlewares.
 */
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Importing routrs and get path in prescriptionRouter
 */
const prescriptionRouter = require('./routers/prescriptionRouter.js');


/**
 * load the 'prescriptionRouter' router on the parent app.
 */
app.use(prescriptionRouter)

/**
 * For any undefined action in browser this will show an error
 * and render 404.ejs.
 * @param {Request} req - No description.
 * @param {Respose} res - Send the rendered view to the client render 404.ejs.
 */
app.use((req, res) => {
    res.render('404.ejs')
})

/**
 * Binds and listens for connections on the specified host and port:3000.
 * The app.listen() method returns an http.Server object 
 * @param {int} 3000 - Port
 * @param {string} err - show an error 
 */
app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('the surver is up at localhost:3000')
    }
    
})