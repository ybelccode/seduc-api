import { Router } from 'express'

const usersRoutes = Router()

usersRoutes.get('/', (req, res) => {
  return res.json({ message: 'Hello User!' })
})

export { usersRoutes }
