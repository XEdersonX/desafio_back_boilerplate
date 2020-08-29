import Application from 'models/Application'

export const index = () =>
  Application.query().withGraphFetched('user').withGraphFetched('vacancy')

export const show = ctx =>
  Application.query()
    .findOne({ id: ctx.params.id })
    .withGraphFetched('user')
    .withGraphFetched('vacancy') // Tem que ser o nome da model

export const create = async ctx => {
  const { body } = ctx.request

  return Application.query().insert({
    user_id: body.user_id,
    vacancy_id: body.vacancy_id
  })
}

export const update = async ctx => {
  const { body } = ctx.request

  return Application.query().patchAndFetchById(ctx.params.id, {
    user_id: body.user_id,
    vacancy_id: body.vacancy_id
  })
}

export const destroy = ctx =>
  Application.query().deleteById(ctx.params.id).returning('*')

export default {
  create,
  update,
  index,
  show,
  destroy
}
