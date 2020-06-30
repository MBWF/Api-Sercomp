const bcrypt = require('bcryptjs')
const db = require('../../database')

class adminController{
     async signIn(req, res){

          const {email, senha } = req.body

          const user = await db('usuario').where({ email }).first()       

          if(!user) return res.status(400).json({ error: 'Este email não existe'})
          
          if(!(bcrypt.compareSync(senha,user.senha))) 
               return res.status(400).json({ error: 'Senha Invalida'})

          return res.status(200).json({ nome: user.name});
          
     }
}
module.exports = new adminController() 