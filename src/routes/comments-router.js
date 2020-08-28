import Router from 'koa-router'

import CommentsController from 'controllers/comments-controller'
import CommentsValidate from 'validators/comments-schema'

const router = new Router()

router.get('/comments', CommentsController.index)

router.post('/comments', CommentsValidate.create(), CommentsController.create)

router.get('/comments/:id', CommentsController.show)
router.put(
  '/comments/:id',
  CommentsValidate.update(),
  CommentsController.update
)

router.delete('/comments/:id', CommentsController.destroy)

export default router.routes()
