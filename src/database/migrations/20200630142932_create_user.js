
exports.up = async knex => knex.schema.createTable('usuario', table => {

    table.increments('id').primary()
    table.text('email').unique().notNullable()
    table.text('senha').notNullable()
    table.text('nome').notNullable()
    table.enu('universidade',['uepb','outras']).notNullable()
    table.text('curso').notNullable()
    

    //relacionamento N para 1
    table.integer('id_perfil')
    .references('perfil.id')
    .notNullable()

    table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
})

exports.down = async knex => knex.schema.dropTable('usuario')
    

