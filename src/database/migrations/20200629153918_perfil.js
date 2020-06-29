
exports.up = async knex => knex.schema.createTable('perfil', table => {
     table.increments('id').primary()
     table.text('nome').unique().notNullable()
})

exports.down = async knex => knex.schema.dropTable('perfil')
