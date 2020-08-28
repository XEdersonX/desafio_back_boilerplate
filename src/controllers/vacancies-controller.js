import Vacancy from 'models/Vacancy'

export const index = () => Vacancy.query().find()

export const show = ctx => Vacancy.query().findOne({ id: ctx.params.id })

export const create = async ctx => {
  const { body } = ctx.request

  return Vacancy.query().insert({
    title: body.title,
    description: body.description
  })
}

export const update = async ctx => {
  const { body } = ctx.request

  return Vacancy.query().patchAndFetchById(ctx.params.id, {
    title: body.title,
    description: body.description
  })
}

export const destroy = ctx =>
  Vacancy.query().deleteById(ctx.params.id).returning('*')

export default {
  create,
  update,
  index,
  show,
  destroy
}
