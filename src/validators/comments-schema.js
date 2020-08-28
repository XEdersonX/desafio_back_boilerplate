import Joi from '@hapi/joi'

import { validateSchema } from 'helpers'

const CommentsValidate = {
  create: () =>
    validateSchema({
      body: {
        application_id: Joi.string().uuid().required(),
        user_id: Joi.string().uuid().required(),
        description: Joi.string().required()
      }
    }),

  update: () =>
    validateSchema({
      body: {
        application_id: Joi.string().uuid().required(),
        user_id: Joi.string().uuid().required(),
        description: Joi.string().required()
      }
    })
}

export default CommentsValidate
