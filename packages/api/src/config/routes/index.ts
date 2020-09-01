import { Router } from 'express'

const apiRoutes = Router()

apiRoutes.get('/api', (req, res) => {
  res.send({ message: 'Hello to API' })
})

export { apiRoutes }
