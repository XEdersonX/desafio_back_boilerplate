import Router from 'koa-router'

import UserController from 'controllers/users-controller'
import UserValidate from 'validators/users-schema'

import { validatorCreateUser, validatorUpdateUser } from 'middlewares'

const router = new Router()

router.get('/me', UserController.me)

router.get('/users', UserController.index)

router.post(
  '/users/signup',
  UserValidate.create(),
  validatorCreateUser,
  UserController.create
)
router.post('/users/login', UserController.login)
router.post('/users/forget', UserController.forget)
router.post('/users/reset', UserController.reset)

router.get('/users/:id', UserController.show)
router.put(
  '/users/:id',
  UserValidate.update(),
  validatorUpdateUser,
  UserController.update
)

router.delete('/users/:id', UserController.destroy)

export default router.routes()
