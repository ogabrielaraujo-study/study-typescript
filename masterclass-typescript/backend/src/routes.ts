import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ status: true })
})

routes.get('/user', UserController.index)
routes.get('/email', UserController.create)

export default routes
