import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema(
  {
    created_at: {
      type: Date,
      default: Date.now,
    },
    email: {
      trim: true,
      type: String,
      sparse: true,
      lowercase: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: 'general',
    },
  },
  {
    versionKey: false,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
      transform(_, ret) {
        const obj = ret
        delete obj.password
        return obj
      },
    },
  }
)

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

UserSchema.methods.isValidPassword = async function (password) {
  const user = this
  const compare = await bcrypt.compare(password, user.password)
  return compare
}

const User = mongoose.model('User', UserSchema)

export { User }
export default User
