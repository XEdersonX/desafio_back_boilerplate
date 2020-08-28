import { Model } from 'objection'

import User from './User'
import Application from './Application'
import { baseModel, modelUuid } from './index'

class CommentsApplication extends modelUuid(baseModel) {
  static tableName = 'comments_application'

  static relationMappings = {
    application: {
      relation: Model.HasManyRelation,
      modelClass: Application,
      join: {
        from: 'comments_application.application_id',
        to: 'applications.id'
      }
    },
    user: {
      relation: Model.HasManyRelation,
      modelClass: User,
      join: {
        from: 'comments_application.user_id',
        to: 'users.id'
      }
    }
  }
}

export default CommentsApplication
