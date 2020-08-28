export const up = knex =>
  knex.schema.createTable('vacancies', table => {
    table.uuid('id').primary()
    table.string('title').notNullable()
    table.string('description').notNullable()

    table.timestamps(true, true)
  })

export const down = knex => knex.schema.dropTableIfExists('vacancies')
