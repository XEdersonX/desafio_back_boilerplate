export const up = knex =>
  knex.schema.createTable('applications', table => {
    table.uuid('id').primary()

    table.uuid('user_id').unsigned()
    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')

    //table.integer('vacancy_id').unsigned()
    table.uuid('vacancy_id').unsigned()
    table
      .foreign('vacancy_id')
      .references('id')
      .inTable('vacancies')
      .onDelete('CASCADE')

    table.timestamps(true, true)
  })

export const down = knex => knex.schema.dropTableIfExists('applications')
