const db = require('../../database')

class minicursoController {
     async store(req, res) {
          const {
               titulo,
               sala,
               professor,
               descricao,
               qnt_alunos,
               data,
               horario
          } = req.body
          
          const minicurso = await db("minicurso").where({ titulo }).first()
          
          if (minicurso) {
               return res.status(404).json({ error: "Já existe um minicurso com esse título"})
          }

          try {
               await db("minicurso").insert({
                    titulo,
                    sala,
                    nome_professor: professor,
                    descricao_professor: descricao, 
                    qnt_alunos,
                    data,
                    horario
               })
               
               const dados = await db("minicurso").where({ titulo }).first()

               return res.status(201).json(dados)

          } catch (error) {
               return res
                    .status(406)
                    .json({ error: "Erro ao tentar cadastrar o minicurso" }); 
          }
     }

     async show(req, res) {
          try {
               const minicursos = await db("minicurso")
               return res.json(minicursos)
          } catch (error) {
               return res
               .status(406)
               .json({ error: "Falha ao buscar todas os minicursos" })
          }
     }

     async update(req, res) {
          const { id } = req.params
          
          const {
               titulo,
               sala,
               professor,
               descricao,
               qnt_alunos,
               data,
               horario
          } = req.body
          
          const minicurso = await db("minicurso").where({ id }).first()

          if (!minicurso) {
               return res
               .status(404)
               .json({ error: "Minicurso não encontrado, ID invalido" })
          }

          try {
               await db("minicurso")
               .update({
                    titulo,
                    sala,
                    nome_professor: professor,
                    descricao_professor: descricao,
                    qnt_alunos,
                    data,
                    horario
               })
               .where({ id })

               return res.status(202).send()

          } catch (error) {
               return res
               .status(406)
               .json({ error: "Não foi possível atualizar o minicurso" })
          }
     }

     async destroy(req, res) {
          const { id } = req.params
          
          const minicurso = await db("minicurso").where({ id }).first()

          if (!minicurso) {
               return res
               .status(404)
               .json({ error: "Minicurso não encontrado, ID inválido" })
          }

          try {
               await db("minicurso").where({ id }).del()

               return res.status(202).send()
          } catch (error) {
               return res.status(406).json({ error: "Não foi possível deletar" })
          }
     }
}

module.exports = new minicursoController()