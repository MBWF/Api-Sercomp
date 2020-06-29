const express = require('express')

const app = express()

app.use(express.json())

app.get('/',(req, res)=>{
     res.json({'Okay meus amigos, o server ta pegando':true})
})

app.listen(3333)

