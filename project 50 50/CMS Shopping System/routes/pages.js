const express = require("express");
const routes = express.Router()

routes.get('/', (req, res) => {
    res.render('index')
})

routes.get('/create', (req, res) => {
    res.send('User creates an account')
})

// Exporting for other files to use
module.exports = routes;
