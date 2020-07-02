//melhorias
// o auth deve pesquisar no banco o usuario id e enviar apenas o id do administrador
module.exports = function (req, res, next) {
  const { id } = req.headers;

  if (!id) return res.status(400).json({ error: "ID não encontrado" });

  if (id != "13") return res.status(401).json({ error: "não autorizado" });

  req.idUser = id;
  next();
};
