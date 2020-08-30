export const seed = async knex => {
  await knex('vacancies').del()
  await knex('vacancies').insert([
    {
      //id: v4(),
      id: '36322432-6892-4726-8c97-0c1376b7bd27',
      title: 'Vaga Nave Seed',
      description: 'HTML, CSS, PHP.',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
