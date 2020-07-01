const express = require('express')
const routes = express.Router()
const adminController = require('./app/controllers/adminController')
const userController = require('./app/controllers/userController')


routes.post('/admin', adminController.signIn)

routes.post('/user', userController.store)

module.exports = routes;