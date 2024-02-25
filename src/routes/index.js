import express from 'express'

import authRouter from './auth'
import locationRouter from './location'
import testRouter from './test'

const indexRouter = express.Router()

indexRouter.use('/auth', authRouter)
indexRouter.use('/location', locationRouter)
indexRouter.use('/test', testRouter)

export default indexRouter
