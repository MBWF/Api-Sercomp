
exports.up = async knex => knex.schema.createTable('palestra', table => {

     table.increments('id').primary()
     table.text('titulo').unique().notNullable()
     table.text('sala').notNullable()
     table.text('name_palestrante').notNullable()
     table.text('descricao_palestrante').notNullable()
     
     table.text('data').notNullable()
     table.text('horario').notNullable()
     
     table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
 })
 
 exports.down = async knex => knex.schema.dropTable('palestra')
     