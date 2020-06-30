const express = require('express')
const routes = express.Router()
const adminController = require('./app/controllers/adminController')


routes.get('/', adminController.index)


module.exports = routes;