import { Model } from 'objection'

import User from './User'
import Vacancy from './Vacancy'
import { baseModel, modelUuid } from './index'

class Application extends modelUuid(baseModel) {
  static tableName = 'applications'

  static relationMappings = {
    user: {
      relation: Model.HasManyRelation,
      modelClass: User,
      join: {
        from: 'applications.user_id',
        to: 'users.id'
      }
    },
    vacancy: {
      relation: Model.HasManyRelation,
      modelClass: Vacancy,
      join: {
        from: 'applications.vacancy_id',
        to: 'vacancies.id'
      }
    }
  }
}

export default Application
