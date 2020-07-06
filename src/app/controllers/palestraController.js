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
      return res.status(404).json({ error: "Já existe uma palestra com esse titulo" });

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
      return res
        .status(406)
        .json({ error: "Erro ao tentar cadastrar a palestra" });
    }
  }

  async show(req, res) {
    try {
      const palestras = await db("palestra");
      return res.json(palestras);
    } catch (error) {
      return res
        .status(406)
        .json({ error: "Falha ao buscar todas as Palestras" });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    const {
      titulo,
      sala,
      nomepalestrante,
      descricao,
      data,
      horario,
    } = req.body;

    const palestra = await db("palestra").where({ id }).first();

    if (!palestra)
      return res
        .status(404)
        .json({ error: "Palestra não encontrada, ID invalido" });

    try {
      await db("palestra")
        .update({
          titulo,
          sala,
          name_palestrante: nomepalestrante,
          descricao_palestrante: descricao,
          data,
          horario,
        })
        .where({ id });
      return res.status(202).send();
    } catch (e) {
      return res.status(406).json({ error: "Não foi possivel atualizar a palestra" });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    const palestra = await db("palestra").where({ id }).first();

    if (!palestra)
      return res
        .status(404)
        .json({ error: "Palestra não encontrada, id invalido" });

    try {
      await db("palestra").where({ id }).del();

      return res.status(202).send();
    } catch (e) {
      return res.status(406).json({ error: "Não foi possivel deletar" });
    }
  }
}

module.exports = new palestraController();
