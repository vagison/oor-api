import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { User } from '../models'
import { jwtConfig } from '../config'

function initPassport() {
  passport.use(
    new JWTStrategy(
      {
        secretOrKey: jwtConfig.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      async (token, done) => {
        try {
          const user = await User.findById(token.id)
          if (user) {
            return done(null, user)
          }
          return done(null, false)
        } catch (error) {
          return done(error, false)
        }
      }
    )
  )
}

export default initPassport
