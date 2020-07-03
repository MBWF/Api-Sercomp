const bcrypt = require("bcryptjs");
const db = require("../../database");

class userController {
  async store(req, res) {
    const { nome, email, senha } = req.body;

    const user = await db("usuario").where({ email }).first();

    if (user) return res.status(400).json({ error: "O email já existe" });

    const hash = bcrypt.hashSync(senha, 8);

    try {
      await db("usuario").insert({
        name: nome,
        email,
        senha: hash,
        id_perfil: 14,
      });

      const aluno = await db("usuario").where({ email }).first();
      delete aluno.senha;
      delete aluno.id_perfil;
      return res.json(aluno);
    } catch (e) {
      console.log(e);
      res.status(402).json();
    }
  }
  async show(req, res) {
    const { id: idAluno } = await db("perfil")
      .where({ nome: "aluno" })
      .select("id")
      .first();

    try {
      const users = await db("usuario")
        .where({ id_perfil: idAluno })
        .select("id", "email", "name", "created_at");
      res.json(users);
    } catch (e) {
      return res
        .status(406)
        .json({ error: "Falha ao buscar todas os Usuarios" });
    }
  }
}

module.exports = new userController();
