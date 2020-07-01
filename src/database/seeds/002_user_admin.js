
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuario').insert([
        {
          id_perfil: 1,
          email: 'admin@sercomp.com',
          senha: '$2a$08$CAUky5gNGCENQn3yhH3.9.ohwj3B72gRO/fa7e5jbopSWXOvZsWgK',
          name: 'Sercomp Admin',
        },
        
      ]);
    });
};
