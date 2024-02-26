import express from 'express'

import authRouter from './auth'
import locationRouter from './location'
import testRouter from './test'

const indexRouter = express.Router()

indexRouter.use('/api/auth', authRouter)
indexRouter.use('/api/locations', locationRouter)
indexRouter.use('/api/test', testRouter)

export default indexRouter
