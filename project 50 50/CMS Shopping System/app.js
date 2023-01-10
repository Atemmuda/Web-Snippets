const express = require('express'); 
const mongoose = require('mongoose'); // package for the mongoDB
const path = require('path'); // for the path navigations
const config = require('./config/database'); // Getting the database

// connecting to the database
mongoose.connect(config.database);
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'error in connetion to db'));
db.once('open', () =>{
    console.log('Successful connection to database');
})

// initaliazation of express application
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup the public folder
app.use(express.static(path.join(__dirname, 'public')));

//Set the routes
const pages = require("./routes/pages.js");
const adminPages = require("./routes/admin_pages.js");

app.use('/admin/pages', adminPages)
app.use('/', pages)

// start the server
let port = 5000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
