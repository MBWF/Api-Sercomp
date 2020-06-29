const express = require('express')
const routes = express.Router()
const adminController = require('./app/controllers/adminController')


routes.get('/', adminController.index)

routes.post('/hello',(req, res)=>{
    const { name } = req.body
    const message = `Olá ${name}`
    return res.json(message);
})

module.exports = routes;