export const seed = async knex => {
  await knex('applications').del()
  await knex('applications').insert([
    {
      //id: v4(),
      id: 'a4a887c9-1519-4d56-b3bf-bfa6619ff088',
      user_id: '220b0c0a-bdc6-46c3-a431-baced90da039',
      vacancy_id: '36322432-6892-4726-8c97-0c1376b7bd27',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
