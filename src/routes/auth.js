import express from 'express'
import { authController } from '../controllers'
import { jwtMiddleware, requestValidator } from '../middlewares'
import { loginValidationSchema, signupValidatorSchema } from '../utils/schemas'

const authRouter = express.Router()

authRouter.post('/signup', requestValidator(signupValidatorSchema), authController.signup)
authRouter.post('/login', requestValidator(loginValidationSchema), authController.login)
authRouter.post('/logout', jwtMiddleware, authController.logout)
authRouter.get('/me', jwtMiddleware, authController.me)

export default authRouter
