const bcrypt = require("bcryptjs");
const db = require("../../database");

class alunoController {
  async singin(req, res) {
    const { email, senha } = req.body

    const aluno = await db("usuario").where({ email }).first()

    if (!aluno) return res.status(404).json({ error: "Usuário não encontrado" })

    if (!bcrypt.compareSync(senha, aluno.senha))
      return res.status(401).json({ error: "Senha Invalida" });

    delete aluno.senha
    delete aluno.id_perfil
    res.json(aluno)
  }

  async showMinicurso(req, res) {
    const { id } = req.params
    
    const data = await db("minicurso")
    .join("minicurso_aluno", "minicurso.id", "minicurso_aluno.id_minicurso")
    .where({ id_aluno: id })
    .select("titulo", "sala", "nome_professor", "descricao_professor", "data", "horario")
    
    return res.json(data)
  }

  async showPalestras(req, res) {
    const palestra = await db("palestra")
    .select("titulo", "sala", "nome_palestrante", "descricao_palestrante", "data", "horario")
    
    return res.json(palestra)
  }

}

module.exports = new alunoController()