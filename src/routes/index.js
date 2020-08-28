import Router from 'koa-router'

import users from './users-router'
import vacancies from './vacancies-router'
import application from './application-router'
import comments from './comments-router'

const router = new Router()
const api = new Router()

api.use(users)
api.use(vacancies)
api.use(application)
api.use(comments)

router.use('/v1', api.routes())

export default router
