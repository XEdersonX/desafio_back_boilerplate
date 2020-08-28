import Joi from '@hapi/joi'

import { validateSchema } from 'helpers'

const ApplicationValidate = {
  create: () =>
    validateSchema({
      body: {
        user_id: Joi.string().uuid().required(),
        vacancy_id: Joi.string().uuid().required()
      }
    }),

  update: () =>
    validateSchema({
      body: {
        user_id: Joi.string().uuid().required(),
        vacancy_id: Joi.string().uuid().required()
      }
    })
}

export default ApplicationValidate
