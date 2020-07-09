const bcrypt = require("bcryptjs");
const db = require("../../database");
const { join } = require("../../database");

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

    //--------------------------------------------------------------------------------//

    const minicurso = await db("minicurso").where({ id }).first()

    if (!minicurso) return res.status(400).json({ error: "Minicurso inválido" })

    //--------------------------------------------------------------------------------//
    
    const aluno = await db("usuario").where({ email }).first()

    if (!aluno) return res.status(400).json({ error: "Email inválido" })

    //--------------------------------------------------------------------------------//

    const qntMinicursoAluno = await db("minicurso_aluno").where({ id_aluno: aluno.id})
    
    if (qntMinicursoAluno.length >= 3) 
      return res.status(401).json({ error: "O aluno não pode se cadastrar em mais de 3 minicursos" })
    
    //--------------------------------------------------------------------------------//
    
    // Pegando o horario de cada minicurso do aluno
    const horariosData = await db("minicurso_aluno")
      .where({ id_aluno: aluno.id})
      .join("minicurso", "minicurso_aluno.id_minicurso", "minicurso.id")
      .select("horario","data")
    
    // Colocando em um objeto o horario e a data do minicurso atual
    const HoraDataMinicurso = { horario: minicurso.horario, data: minicurso.data} 

    const validacao = await horariosData.filter( HD => HD.horario === HoraDataMinicurso.horario && HD.data === HoraDataMinicurso.data)
      
    if( validacao.length > 0){
      return res
        .status(401)
        .json({error: "O aluno ja tem um Mincurso nesse horario e data"})
    }
    
    //--------------------------------------------------------------------------------//
    
    const qntAlunoMinicurso = await db("minicurso_aluno").where({ id })

    if (qntAlunoMinicurso.length === minicurso.qnt_alunos)
      return res.status(401).json({ error: "O minicurso já está cheio" })

    //--------------------------------------------------------------------------------//

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
