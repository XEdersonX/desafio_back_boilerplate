import { v4 } from 'uuid'

export const seed = async knex => {
  await knex('comments_application').del()
  await knex('comments_application').insert([
    {
      id: v4(),
      application_id: 'a4a887c9-1519-4d56-b3bf-bfa6619ff088',
      user_id: '220b0c0a-bdc6-46c3-a431-baced90da039',
      description: 'comments seed test',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: v4(),
      application_id: 'a4a887c9-1519-4d56-b3bf-bfa6619ff088',
      user_id: '220b0c0a-bdc6-46c3-a431-baced90da039',
      description: 'comments seed test 22222',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
