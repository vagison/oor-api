import createError from 'http-errors'
import { errorMessagesConstants } from '../constants'

function isAdmin(req, res, next) {
  if (req.user.type !== 'admin') {
    throw createError.Unauthorized(errorMessagesConstants.User.AccessDenied)
  }

  return next()
}

export default isAdmin
