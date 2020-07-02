//melhorias
// o auth deve pesquisar no banco o usuario id e enviar apenas o id do administrador
const db = require("../../database");

module.exports = async function (req, res, next) {
  console.log("🕵  Verificando Credencias");
  const { id } = req.headers;

  if (!id) return res.status(400).json({ error: "ID não encontrado" });

  const Admin = await db("usuario").where({ id }).first();

  if (!Admin) return res.status(401).json({ error: "Esse Usuario não existe" });

  const { id: idAdmin } = await db("perfil")
    .where({ nome: "administrador" })
    .select("id")
    .first();

  if (Admin.id_perfil !== idAdmin)
    return res.status(401).json({ error: "Esse Usuario não esta autorizado" });

  req.idUser = id;
  next();
};
