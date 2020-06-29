// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      user: "postgres",
      password: "jairosl10",
      atabase: "knexsercomp"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
  }
