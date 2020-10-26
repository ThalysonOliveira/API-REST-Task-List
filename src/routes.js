import { Router } from 'express'
const routes = new Router()

import authMiddleware from './app/middlewares/auth'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import TaskController from './app/controllers/TaskController'

routes.post('/user',UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)
routes.put('/users', UserController.update)
routes.post('tasks', TaskController.store)



export default routes