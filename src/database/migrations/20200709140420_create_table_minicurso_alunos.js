
exports.up = async knex => knex.schema.createTable('minicurso_aluno', table => {

     table.increments('id').primary()

     //relacionamento N para N
     table.integer('id_aluno')
     .references('usuario.id')
     .notNullable()
     .onDelete('CASCADE')

     table.integer('id_minicurso')
     .references('minicurso.id')
     .notNullable()
     .onDelete('CASCADE')
 
     table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
 })
 
exports.down = async knex => knex.schema.dropTable('minicurso_aluno')