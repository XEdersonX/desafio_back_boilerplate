export const up = knex =>
  knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS CITEXT')
    .createTable('roles', table => {
      table.increments('id').primary()
      table.string('role').notNullable()
    })
    .createTable('users', table => {
      table.uuid('id').primary()
      table.string('name').notNullable()
      table.specificType('email', 'CITEXT').unique().notNullable()
      table.string('fone', 20).notNullable()
      table.string('cpf', 11).unique().notNullable()
      table.string('password').notNullable()
      table.string('password_reset_token').unique()
      table.integer('role_id').unsigned()
      table
        .foreign('role_id')
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')

      /*
        Adds created_at and updated_at columns on the database, setting each to datetime types

        When true is passed as the first argument a timestamp type is used instead. Both columns
        default to being not null and using the current timestamp when true is passed as the
        second argument
      */
      table.timestamps(true, true)
    })

export const down = knex =>
  knex.schema.dropTableIfExists('users').dropTableIfExists('roles')
