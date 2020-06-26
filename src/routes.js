const express = require('express')
const routes = express.Router()

routes.get('/hello',(req, res) => {
        return res.json({ message: "Hello World"});
})
routes.post('/hello',(req, res)=>{
    const { name } = req.body
    const message = `Olá ${name}`
    return res.json(message);
})

module.exports = routes;