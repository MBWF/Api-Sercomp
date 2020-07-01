const db = require("../../database");

class palestraController {
  async store(req, res) {
    const {
      titulo,
      sala,
      nomepalestrante,
      descricao,
      data,
      horario,
    } = req.body;

    const palestra = await db("palestra").where({ titulo }).first();

    if (palestra)
      return res.json({ error: "Já existe uma palestra com esse titulo" });

    try {
      await db("palestra").insert({
        titulo,
        sala,
        name_palestrante: nomepalestrante,
        descricao_palestrante: descricao,
        data,
        horario,
      });

      const dados = await db("palestra").where({ titulo }).first();

      return res.status(201).json(dados);
    } catch (e) {
      return res.json({ error: "Erro ao tentar cadastrar a palestra" });
    }
  }
}

module.exports = new palestraController();
