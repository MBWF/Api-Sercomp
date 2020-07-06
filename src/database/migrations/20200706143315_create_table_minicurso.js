
exports.up = async knex => knex.schema.createTable('minicurso', table => {

     table.increments('id').primary()
     table.text('titulo').unique().notNullable()
     table.text('sala').notNullable()
     table.text('nome_professor').notNullable()
     table.text('descricao_professor').notNullable()
     table.integer('qnt_alunos').notNullable()

     table.text('data').notNullable()
     table.text('horario').notNullable()
     
     table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
 })
 
exports.down = async knex => knex.schema.dropTable('minicurso')
     