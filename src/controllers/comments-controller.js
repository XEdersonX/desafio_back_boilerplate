import CommentsApplication from 'models/CommentsApplication'

export const index = ctx =>
  CommentsApplication.query()
    .where('application_id', `${ctx.params.id}`)
    .withGraphFetched('user')

export const show = ctx =>
  CommentsApplication.query().findOne({ id: ctx.params.id })

export const create = async ctx => {
  const { body } = ctx.request

  return CommentsApplication.query().insert({
    application_id: body.application_id,
    user_id: body.user_id,
    description: body.description
  })
}

export const update = async ctx => {
  const { body } = ctx.request

  return CommentsApplication.query().patchAndFetchById(ctx.params.id, {
    application_id: body.application_id,
    user_id: body.user_id,
    description: body.description
  })
}

export const destroy = ctx =>
  CommentsApplication.query().deleteById(ctx.params.id).returning('*')

export default {
  create,
  update,
  index,
  show,
  destroy
}
