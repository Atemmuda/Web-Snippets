const express = require("express");
const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('This is the admin page')
})

routes.get('/create', (req, res) => {
    res.send('This is the admin creation page')
})

// Exporting for other files to use
module.exports = routes;