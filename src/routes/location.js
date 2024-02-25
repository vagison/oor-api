import express from 'express'
import { locationController } from '../controllers'
import { requestValidator, jwtMiddleware, isAdmin } from '../middlewares'
import { locationValidatorSchemaForCreate, locationValidatorSchemaForMultipleUpdate, locationValidatorSchemaForUpdate } from '../utils/schemas'

const locationRouter = express.Router()

locationRouter.post('/', jwtMiddleware, isAdmin, requestValidator(locationValidatorSchemaForCreate), locationController.create)
locationRouter.get('/', locationController.getMany)
locationRouter.get('/:_id', locationController.getById)
locationRouter.patch('/:_id', jwtMiddleware, isAdmin, requestValidator(locationValidatorSchemaForUpdate), locationController.updateById)
locationRouter.patch('/', jwtMiddleware, isAdmin, requestValidator(locationValidatorSchemaForMultipleUpdate), locationController.updateMany)
locationRouter.delete('/:_id', jwtMiddleware, isAdmin, locationController.deleteById)

export default locationRouter
