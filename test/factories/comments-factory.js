import Comments from 'models/CommentsApplication'

import { stringGenerator } from 'helpers'

const commentFactory = async (id_application, id_user) => {
  const comment = await Comments.query().insert({
    application_id: id_application,
    user_id: id_user,
    description: stringGenerator()
  })

  const parsedComment = comment.toJSON()

  return parsedComment
}

export default commentFactory
