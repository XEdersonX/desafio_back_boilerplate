export const up = knex =>
  knex.schema.createTable('comments_application', table => {
    table.uuid('id').primary()
    table.string('description').notNullable()

    table.uuid('application_id').unsigned()
    table
      .foreign('application_id')
      .references('id')
      .inTable('applications')
      .onDelete('CASCADE')

    table.uuid('user_id').unsigned()
    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')

    table.timestamps(true, true)
  })

export const down = knex =>
  knex.schema.dropTableIfExists('comments_application')
