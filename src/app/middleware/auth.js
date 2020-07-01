module.exports = function (req, res, next) {
  const { id } = req.headers;

  if (!id) return res.status(400).json({ error: "ID não encontrado" });

  if (id != 1) return res.status(401).json({ error: "não autorizado" });

  req.idUser = id;
  next();
};
