class adminController{
     index(req, res){
          return res.json({
               okay:true
          })
     }
}
module.exports = new adminController() 