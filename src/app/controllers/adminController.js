const bcrypt = require("bcryptjs");
const db = require("../../database");

class adminController {
  async signIn(req, res) {
    const { email, senha } = req.body;

    const user = await db("usuario").where({ email }).first();

    if (!user) return res.status(400).json({ error: "Este email não existe" });

    const { id: idAdmin } = await db("perfil")
      .where({ nome: "administrador" })
      .select("id")
      .first();

    if (user.id_perfil != idAdmin)
      return res
        .status(401)
        .json({ error: "Este usuário não está autorizado" });

    if (!bcrypt.compareSync(senha, user.senha))
      return res.status(401).json({ error: "Senha Invalida" });

    return res.status(200).json({ nome: user.name, id: user.id });
  }

  async cadastrar(req, res) {
    const { id } = req.params
    const { email } = req.body 

    const minicurso = await db("minicurso").where({ id }).first()

    if (!minicurso) return res.status(400).json({ error: "Minicurso inválido" })
    
    const aluno = await db("usuario").where({ email }).first()

    if (!aluno) return res.status(400).json({ error: "Email inválido" })

    const qntMinicursoAluno = await db("minicurso_aluno").where({ id_aluno: aluno.id})
    
    if (qntMinicursoAluno.length >= 3) 
      return res.status(401).json({ error: "O aluno não pode se cadastrar em mais de 3 minicursos" })

    qntMinicursoAluno.map(async (minicurso) => {
      const newMinicurso = await db("minicurso").where({ id: minicurso.id_minicurso }).first()
      const currentMinicurso = await db("minicurso").where({ id }).first()

        if (newMinicurso.horario === currentMinicurso.horario) {
          return res.status(401).json({ error: "O aluno já tem um minicurso nesse horário" })
        }
          
        if (newMinicurso.id === currentMinicurso.id)
          return res.status(401).json({ error: "O aluno já está nesse minicurso" })
    })

    const qntAlunoMinicurso = await db("minicurso_aluno").where({ id })

    if (qntAlunoMinicurso.length === minicurso.qnt_alunos)
      return res.status(401).json({ error: "O minicurso já está cheio" })

    try {
      await db("minicurso_aluno").insert({ id_aluno: aluno.id, id_minicurso: minicurso.id})
      return res.status(201).send()

    } catch (error) {
        return res
        .status(406)
        .json("Não foi possível cadastrar o aluno nesse minicurso")
    }
  }
}
module.exports = new adminController();
