const express = require('express')
const routes = express.Router()
const adminController = require('./app/controllers/adminController')


routes.post('/admin', adminController.signIn)


module.exports = routes;