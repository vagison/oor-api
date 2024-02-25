import { checkSchema, validationResult } from 'express-validator'
import createError from 'http-errors'

export default function validate(schema) {
  return async (req, res, next) => {
    await checkSchema(schema).run(req)

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      const err = createError.BadRequest(errors.array()[0].msg)
      return next(err)
    }

    return next()
  }
}
