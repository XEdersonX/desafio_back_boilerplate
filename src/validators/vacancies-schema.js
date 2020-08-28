import Joi from '@hapi/joi'

import { validateSchema } from 'helpers'

const VacanciesValidate = {
  create: () =>
    validateSchema({
      body: {
        title: Joi.string().required(),
        description: Joi.string().required()
      }
    }),

  update: () =>
    validateSchema({
      body: {
        title: Joi.string().required(),
        description: Joi.string().required()
      }
    })
}

export default VacanciesValidate
