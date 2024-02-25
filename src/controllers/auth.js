/* eslint-disable max-len */
import createError from 'http-errors'
import { User } from '../models'
import { generateJWT, setAuthResponse } from '../utils/auth'
import { errorMessagesConstants, responseMessagesConstants } from '../constants'

const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body

  const user = await User.create({
    email,
    password,
    firstName,
    lastName,
  })

  const accessToken = generateJWT(user)

  setAuthResponse(res, accessToken)

  return res.json({ user, accessToken })
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      throw createError.NotFound(errorMessagesConstants.User.NotFound)
    }

    if (!(await user.isValidPassword(password))) {
      throw createError.Unauthorized(errorMessagesConstants.User.InvalidPassword)
    }

    const accessToken = generateJWT(user)

    setAuthResponse(res, accessToken)

    return res.json({ user, accessToken })
  } catch (error) {
    next(error)
  }
}

const logout = async (req, res, next) => {
  res.removeHeader('authorization')
  return res.json({ message: responseMessagesConstants.Auth.Logout })
}

const me = async (req, res, next) => {
  try {
    return res.json(req.user)
  } catch (error) {
    next(error)
  }
}

export { signup, login, logout, me }
