const express = require('express')

const app = express()

app.use(express.json())

app.get('/',(req, res)=>{
     res.json({Ok:true})
})

app.listen(3333)

