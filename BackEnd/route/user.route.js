import express from 'express'
import user from './controller/user.control'

const router = express.Router()

router.route('api/list')
    .get(user.list)
export default router