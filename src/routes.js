import { Router } from 'express'
import app from './app'
const routes = new Router()

routes.get('/', (req, res) => {
    return res.json({ ok: true })
})

export default routes