import Router from 'koa-router'

import ApplicationController from 'controllers/application-controller'
import ApplicationValidate from 'validators/application-schema'

const router = new Router()

router.get('/application', ApplicationController.index)
router.get('/application/user/:id', ApplicationController.indexUser)

router.post(
  '/application',
  ApplicationValidate.create(),
  ApplicationController.create
)

router.get('/application/:id', ApplicationController.show)
router.put(
  '/application/:id',
  ApplicationValidate.update(),
  ApplicationController.update
)

router.delete('/application/:id', ApplicationController.destroy)

export default router.routes()
