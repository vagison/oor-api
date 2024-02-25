import jwt from 'jsonwebtoken'
import { jwtConfig } from '../config'

const generateJWT = (user) => {
  const { id, email } = user
  return jwt.sign(
    {
      id,
      email,
    },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn }
  )
}

const setAuthResponse = (res, accessToken) => {
  res.setHeader('authorization', `Bearer ${accessToken}`)
}

export { generateJWT, setAuthResponse }
