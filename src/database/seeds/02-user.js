import { v4 } from 'uuid'

import { encryptPassword } from '../../helpers/password'

export const seed = async knex => {
  await knex('users').del()
  await knex('users').insert([
    {
      //id: v4(),
      id: '220b0c0a-bdc6-46c3-a431-baced90da039',
      name: 'Nave Team',
      cpf: '45117845910',
      fone: '5323457792',
      email: 'tech@nave.rs',
      password: await encryptPassword('teste1'),
      role_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
