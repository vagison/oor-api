import dotenv from 'dotenv'

dotenv.config()

const dbConfig = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}`,
  isDebugEnabled: process.env.DB_DEBUG === 'true',
}

const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: +process.env.JWT_EXPIRES_IN || 900,
}

const corsConfig = {
  origin: '*',
  credentials: true,
}

export { dbConfig, corsConfig, jwtConfig }
